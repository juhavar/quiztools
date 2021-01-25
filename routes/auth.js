const router = require('express').Router();
const userController = require('../controllers/userController');
const {adminCheck} = require('./middleware')

const db = require('../db')
const jwt = require('jsonwebtoken')

router.use(authenticateToken)//, adminCheck)
//router.get('/tokentestaus', authenticateToken, userController.tokentestaus)

//router.get('/token', authenticateToken, adminCheck)

function authenticateToken(req, res, next) {
    //console.log("Koitetaan tutkia tokenia")
    //console.log(req.headers)
    const authHeader = req.headers['auth-token']
    //console.log("authHeader", authHeader)
    const token = authHeader //&& authHeader.split(' ')[1]
    //console.log(token)
    if (token==null) {
        //console.log("Ei löytyny tokenia")
        return res.sendStatus(401) // 401 unauthorized jos tokenia ei o
    }
    jwt.verify(token, 'TOP_SECRET', (err, user) => {
        
        //console.log("user, auth.js", user)
        if(err){
            //console.log("403 Forbidden")
            return res.sendStatus(403) // 403 forbidden
        }
        return res.sendStatus(202)
        
    })
  }

  router.delete('/poistakayttaja/:id', (req, res, next) => {
  
    db.query('DELETE FROM kayttajat WHERE id=$1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Käyttäjä poistettu')
  })
  })
  
  


module.exports = router;