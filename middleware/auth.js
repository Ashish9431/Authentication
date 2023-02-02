const jwt = require('jsonwebtoken');

const auth= async(req, res, next) => {
    try {
      // Get the token from the request headers
      console.log(req.headers.authorization)
      const token = req.headers.authorization;
      if (!token) {
        // If there is no token, return an error
        return res.status(401).json({ error: 'No token provided' });
      }
      
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.id;

      // Call the next middleware function
      next();
    } catch (error) {
      // If the token is invalid, return an error
      return res.status(401).json({ error: 'Invalid token' });
    }
  }

  module.exports=auth;
  
  