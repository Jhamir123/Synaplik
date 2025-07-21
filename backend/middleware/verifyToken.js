const jwt = require('jsonwebtoken');  // Importamos la librería JWT para verificar el token

// Middleware para verificar el token
const verifyToken = (req, res, next) => {
  // Paso 1: Obtener el token del encabezado de la solicitud (normalmente se pasa en 'x-auth-token')
  const token = req.header('x-auth-token');

  // Paso 2: Si no hay token, denegar acceso (mandamos error 401)
  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado. No hay token.' });
  }

  try {
    // Paso 3: Verificar el token con la clave secreta almacenada en .env (JWT_SECRET)
    const verified = jwt.verify(token, process.env.JWT_SECRET);  // `process.env.JWT_SECRET` debe estar en tu archivo `.env`

    // Paso 4: Si el token es válido, guardamos la información del usuario decodificada en la solicitud
    req.user = verified;

    // Paso 5: Continuamos con la siguiente ruta o middleware
    next();
  } catch (error) {
    // Paso 6: Si el token no es válido, mandamos un error 400
    res.status(400).json({ message: 'Token no válido' });
  }
};

// Exportamos el middleware para usarlo en otras partes de la aplicación
module.exports = verifyToken;
