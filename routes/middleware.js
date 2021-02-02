const jwt = require("jsonwebtoken");


exports.authenticateToken = async function(req, res, next) {
    //console.log("Koitetaan tutkia tokenia")
    //console.log(req.headers)
    const authHeader = req.headers['token']
    console.log("authHeader", authHeader)
    const token = authHeader //&& authHeader.split(' ')[1]
    console.log("authenticatetokenin token: ", token)
    if (token===null || undefined) {
        console.log("Ei löytyny tokenia")
        return res.sendStatus(401) // 401 unauthorized jos tokenia ei o
    }
    jwt.verify(token, 'TOP_SECRET', (err, user) => {
        
        //console.log("user, auth.js", user)
        if(err){
            console.log("403 Forbidden")
            return res.sendStatus(403) // 403 forbidden
        }
        //return res.sendStatus(202)
        console.log("jwt tarkastettu")
        return next()
    })
  }

  exports.adminCheck = function (req, res, next) {
    console.log("Admincheck")
    console.log("admin header:", req.headers.admin)
    if(req.headers.admin==='true'){
        console.log("next");
        return next();
        //return res.status(202).send("Access granted");
    }  
    else if(req.headers === (null || undefined || 'false'))
        console.log("admin header kosahti" )    
        return res.status(401).send("Access denied")
    
}