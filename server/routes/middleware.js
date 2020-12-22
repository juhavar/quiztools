const jwt = require("jsonwebtoken");

exports.adminCheck = async function (req, res, next) {
    console.log("Admincheck")
    console.log("Header:",req.header.admin)
    if( req.headers.admin === false ){
        return res.status(401).send("Access Denied");
    }  
    next();
}