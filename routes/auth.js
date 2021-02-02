const router = require('express').Router();
const userController = require('../controllers/userController');
const { authenticateToken, adminCheck } = require('./middleware')

const db = require('../db')
const jwt = require('jsonwebtoken')

//router.use(authenticateToken, adminCheck)
//router.get('/tokentestaus', authenticateToken, userController.tokentestaus)

//router.get('/token', authenticateToken, adminCheck)



  router.get('/kayttajat', [authenticateToken], (req, res, next) => {
    console.log("/kayttajat")
    db.query('SELECT * FROM kayttajat',(err, result)=> {
      if (err) {
        return next(err)
      }
      console.log("Käyttäjiä haettu")
      res.send(result.rows)
    })
  })

  router.delete('/poistakayttaja/:id', (req, res, next) => {
    console.log("poisto")
    db.query('DELETE FROM kayttajat WHERE id=$1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send('Käyttäjä poistettu')
  })
  })
  


module.exports = router;