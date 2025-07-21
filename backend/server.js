const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors = require('cors');
const verifyToken = require('./middleware/verifyToken');  // Importamos el middleware

dotenv.config();  // Cargar las variables de entorno desde el archivo .env

// Inicializar Express
const app = express();

// Middleware
app.use(express.json()); // Para manejar JSON en las solicitudes
app.use(cors()); // Para permitir CORS, necesario para React

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((error) => console.error('Error de conexión:', error));

// Definir el esquema y modelo de Usuario
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Ruta de registro (POST) para crear nuevos usuarios
app.post('/api/auth/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Verificar si el usuario ya existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Usuario ya registrado' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    // Guardar el usuario en la base de datos
    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario' });
  }
});

// Ruta de login (POST) para autenticar a los usuarios
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Buscar el usuario por el correo electrónico
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Crear un token JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error al autenticar usuario' });
  }
});

// Ruta protegida que solo puede ser accedida si el usuario tiene un token válido
app.get('/api/protected', verifyToken, (req, res) => {
  // Si el token es válido, 'req.user' tendrá la información del usuario
  res.json({ message: 'Contenido protegido', user: req.user });
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando!');
});

// Iniciar el servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor backend escuchando en el puerto ${port}`);
});

