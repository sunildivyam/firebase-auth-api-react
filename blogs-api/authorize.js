const admin = require('firebase-admin');

// Initialize firebase app

var serviceAccount = require("./service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const authorize = async (req, res, next) => {
  const authorization = req.headers.authorization || '';

  const token = authorization.split('Bearer ')[1];
  const auth = admin.auth();

  try {
    const decodedToken = auth.verifyIdToken(token);

    if (decodedToken) {
      next();
    } else {
      return res.status(401).send('Un Authorized');
    }
  } catch (error) {
    return res.status(401).send(error);
  }
}


module.exports = authorize;
