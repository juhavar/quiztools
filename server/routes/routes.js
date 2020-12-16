const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken')
const db = require('../db')


var bcrypt = require('bcrypt')
const SALT_ROUNDS = 10

const router = express.Router();

module.exports = router;

// hakee kaikki kysymykset (testi)
router.get('/kysymykset/', (req, res, next) => {
    db.query('SELECT * FROM kysymykset', (err, result) => {
        if (err) {
            return next(err)
        }
        console.log(result.rows)
        res.send(result.rows)
    })
})

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

/* router.post('/login/:email/:salasana', (req, res, next) => {

    console.log("koitetaan kirjautua sissää")
        db.query(`SELECT * FROM kayttajat WHERE email=$1`,
            [req.params.email]), (err, result) => {
                if (err) {
                    console.log("virhe")
                    return next(err)
                }



                console.log(res.result)
                try {
                    console.log(req.params.salasana)
                    console.log(result.rows[0].salasana)
                    let hashSalasana = bcrypt.hash(tulevaSalasana, SALT_ROUNDS)
                    console.log(hashSalasana)

                    let vertailu = bcrypt.compare(hashSalasana, res.rows[0].salasana)
                    if (vertailu)
                        console.log("täsmää")
                    else
                        console.log("eipä täsmää")
                }
                catch (e) {
                    console.log(e)
                }
            }

    
    
}) */