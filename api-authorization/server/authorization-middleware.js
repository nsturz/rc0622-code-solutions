const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error'); // eslint-disable-line

function authorizationMiddleware(req, res, next) {
  /* your code here */

  const token = req.get('x-access-token');
  if (!token) {
    throw new ClientError(401, 'authentication required');
  }
  const payload = jwt.verify(token, process.env.TOKEN_SECRET);
  req.user = payload;
  next();
  // 9/12/22 this code is done, you just need to test it according to the instrutions and
  // take screenshots!

  /**
   * Try to get the 'X-Access-Token' from the request headers.
   * If no token is provided,
   *   throw a 401 error with the message 'authentication required'
   * Use jwt.verify() to verify the authenticity of the token and extract its payload
   * Assign the extracted payload to the user property of the req object.
   * Call next() (with no arguments) to let Express know to advance to its next route or middleware.
   */

  /**
    * References:
    * https://expressjs.com/en/4x/api.html#req.get
    * https://nodejs.org/api/http.html#http_message_headers
    * https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
    */
}

module.exports = authorizationMiddleware;
