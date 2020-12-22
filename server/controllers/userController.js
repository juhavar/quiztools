//const User = require("../models/userModel.js")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const SALT_ROUNDS = 10
const db = require('../db')

exports.login = async (req, res, next) =>{
    console.log("koitetaan kirjautua sissää")
    console.log("käyttäjä", req.body.email)
    console.log("salasana", req.body.salasana)
    // haetaan käyttäjän (hashattu) salasana tietokannasta
    db.query(`SELECT * FROM kayttajat WHERE email=$1`,[req.body.email], (err, kayttaja) =>{
        console.log("err", err)
        
        if (err) {
            return next(err)
          }
    console.log("käyttajä", kayttaja.rows[0])
    try{
        // verrataan annettua salasanaa kannassa olevaan
        bcrypt.compare(req.body.salasana, kayttaja.rows[0].salasana, function(err, pwCheck) {
            console.log("Salasana täsmää: ",pwCheck)
            if(pwCheck){ // jos vertailu täsmää, tehdään token ja palautetaan se
                const token = jwt.sign({ email: req.body.email, 
                                         etunimi: kayttaja.rows[0].etunimi, 
                                         sukunimi: kayttaja.rows[0].sukunimi, 
                                         admin: kayttaja.rows[0].admin}, 
                                         'TOP_SECRET',
                                         {expiresIn: '240000s'} )
                //console.log("token tehty")
                res.header("auth-token",token).send({"token": token})
                //res.send("logattu sissää")
            }
        })

    }catch{
        res.send(err)
    }
    })
}

exports.tokentestaus = async (req, res) => {
    console.log("token header",req.headers.token)
    res.sendStatus(200)
}


exports.paljokello = (req, res, err) => {
  if(err) {console.log(err)}

    console.log('Kello on:', Date.now())
    res.send("Kello", Date.now())
  
    
}






// Register a new User
/* exports.register = async (req, res) => {
    
    //Hash password
    
    const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);

    // Create an user object
    const user = new User({
        etunimi: req.body.etunimi,
        sukunimi: req.body.sukunimi,
        email: req.body.email,
        password: hashedPassword,
        admin: req.body.admin
        
    });
    // Save User in the database
    try {
        const id = await User.create(user);
        user.id = id;
        delete user.password;
        res.send(user);
    }
    catch (err){
        res.status(500).send(err);
    }    
}; */

/* exports.login = async (req, res) => {
    console.log("koitetaan kirjautua sissää")
    console.log("käyttäjä", req.body.email)
    console.log("salasana", req.body.salasana)
    try {
        console.log("try:")
        let user = async (req, res, next) => {
            console.log("iwjoti4wj")
            let row = await db.query(`SELECT * FROM kayttajat WHERE email=$1`,[])
            if (row.length) {
                console.log(row.length)
                return row[0]
            }
            console.log("user",user)

            /*  if (result) {
                 console.log("salasana",result.rows[0].salasana)
                 
                 
                 const passCheck =  bcrypt.compare(req.body.salasana, user)
                 console.log(passCheck)
                 if(!passCheck) return res.status(400).send
                 res.send("Kirjauduttu sisään")
                 return result.rows[0]
             }
         
         })}
     console.log("user", user) */
    //     }
    //     }catch (err) {
    //         res.send(err)
    //     }
    // } */