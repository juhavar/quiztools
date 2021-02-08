const express = require('express');
//const passport = require('passport');
var bodyParser = require("body-parser")
const db = require('../db')
const userController = require('../controllers/userController');

var bcrypt = require('bcrypt')
const SALT_ROUNDS = 10

const router = express.Router();

module.exports = router;

router.post('/upload', function (req, res) {
    console.log("upload")
    /* if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    } */
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let newFile = req.files.file;
    console.log(newFile)
    let date = Date.now().toString();
    let fileName = 'uploads/image' + date + '.png'
     newFile.mv(fileName, function (err) {
        if (err) {
            return res.status(500).send(err)
        } else {
            
            return res.json(fileName)
        }
    }); 
    console.log("hereweare")
});

// hakee kaikki kysymykset (testinä että täällä ollaan)
router.get('/kysymykset/', (req, res, next) => {
    db.query('SELECT * FROM kysymykset', (err, result) => {
        if (err) {
            return next(err)
        }
        //console.log(result.rows)
        res.send(result.rows)
    })
})

// parametriratkasu
router.post('/register/:etunimi/:sukunimi/:email/:salasana/:admin', (req, res, next) => {
    //console.log("Yritetään rekisteröityä")
    var admin=false
    if (req.params.admin === process.env.ADMIN_KEY){
        admin=true
        }
    bcrypt.hash(req.params.salasana, SALT_ROUNDS, (error, hash) => {

        db.query(`INSERT INTO 
                kayttajat
                    (etunimi,sukunimi,email,salasana,admin) 
                VALUES
                    ($1,$2,$3,$4,$5)
                RETURNING id`,
            [
                req.params.etunimi,
                req.params.sukunimi,
                req.params.email,
                hash,
                admin
            ],
            (err, result) => {
                if (err) {
                    return next(err)
                }
                console.log(result.rows)
                res.send(result.rows[0].id)
            })
    })

})

router.post('/login/', userController.login)


                
/*     try {
         db.query(`SELECT * FROM kayttajat WHERE email=$1`,
            [req.body.email]), (err, result) => {
                if (err) {
                    console.log("virhe")
                    return next(err)
                }
                console.log(result)
            }
            
        }catch (err){
            res.send(err)
        }


                console.log(res.result)
                try {
                    /* console.log("salasana:", req.body.salasana)
                    console.log(result.rows[0].salasana)
                    let hashSalasana = bcrypt.hash(req.body.salasana, SALT_ROUNDS)
                    console.log(hashSalasana)
 */
/*                     let vertailu = bcrypt.compare(hashSalasana, res.rows[0].salasana)
                    if (vertailu)
                        console.log("täsmää")
                    else
                        console.log("eipä täsmää")
                }
                catch (e) {
                    console.log(e)
                }
            }

    
        }   */  
    //})