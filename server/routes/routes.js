const express = require('express');
//const passport = require('passport');

const db = require('../db')
const userController = require('../controllers/userController');

var bcrypt = require('bcrypt')
const SALT_ROUNDS = 10

const router = express.Router();

module.exports = router;



// hakee kaikki kysymykset (testinä että täällä ollaan)
router.get('/kysymykset/', (req, res, next) => {
    db.query('SELECT * FROM kysymykset', (err, result) => {
        if (err) {
            return next(err)
        }
        console.log(result.rows)
        res.send(result.rows)
    })
})

// parametriratkasu
router.post('/register/:etunimi/:sukunimi/:email/:salasana/:admin', (req, res, next) => {
    console.log("Yritetään rekisteröityä")
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
                req.params.admin
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