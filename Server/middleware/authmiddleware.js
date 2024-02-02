const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    const token = req.headers?.authorization.split(" ")[1];

console.log(req.headers);
    const decrypt = jwt.verify(token, process.env.jwt_Secretkey);

    req.body.userid = decrypt?.userid;

    next();
  } catch (err) {
    console.error('JWT Verification Error:', err.message);
  }
};
