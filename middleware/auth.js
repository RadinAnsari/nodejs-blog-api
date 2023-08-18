
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    console.log(token);
    if (!token) {
        return res.status(403).send("A token is required for authentication")
    }
    const decodedToken = jwt.decode(token, 'secret_key')
    req.userData = { email: decodedToken.email }
    next()
}