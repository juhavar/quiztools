const jwt = require("jsonwebtoken");

exports.adminCheck = async function (req, res, next) {
    console.log("Admincheck")
    console.log("admin header:", req)
    if( req.headers.admin === true ){
        return res.status(202).send("Access granted");
    }  
    else{
     return res.status(401).send("Access denied")
    }
}