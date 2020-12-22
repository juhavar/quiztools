var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
//require('./routes/auth');

const jwt = require('jsonwebtoken')

var app = express()
module.exports = app
var port = process.env.PORT || 5000
app.use(bodyParser.json())

const db = require('./db')

const routes = require('./routes/routes');
const authRoute = require('./routes/auth')
app.use('/kayttajat', authRoute)

//const secureRoute = require('/routes/secure-routes')

//https://expressjs.com/en/resources/middleware/cors.html
// pelkkä localhost:3000 läpi
app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 }))

app.use('/', routes)

//app.use('/paljokello', authRoute)
//app.use('/kayttajat',authRoute)
//app.use('/', authRoute.authenticateToken('jwt', { session: false}), authRoute);

var paljoKello= function (req, res, next) {
  console.log('Kello on:', Date.now())
  next()
}
app.use('/tokentestaus', authRoute)
app.use('/token', authRoute)

app.get('/paljokello', function (req, res, next) {
  res.send('Kello')
})



//------------- L U O M I S E T

// luodaan tentti (ok)

app.post('/lisaatentti/:nimi', (req, res, next) => {
  db.query('INSERT INTO tentit(nimi) VALUES ($1) RETURNING id',
    [req.params.nimi], (result, err) => {
      if (err) {
        return next(err)
      }
      console.log(result)
      res.send(result.rows[0].id)
    })

})

// luodaan kysymys (ehkä ok)

app.post('/lisaakysymys/:tentti_id/:teksti', (req, res, next) => {
  db.query('INSERT INTO kysymykset(tentti_id, teksti) VALUES ($1, $2) RETURNING id',
    [req.params.tentti_id, req.params.teksti], (err) => {
      if (err) {
        return next(err)
      }
      res.send("Kysymyksen lisäys ok.")
      console.log("Lisätty kys")
    })

})

// luodaan vastaus (siirretty auth)

app.post('/lisaavastaus/:tentti_id/:kysymys_id/:vastausteksti/:oikein', (req, res, next) => {
  db.query('INSERT INTO vastaukset(tentti_id, kysymys_id, vastausteksti, oikea) VALUES ($1, $2, $3, $4)',
    [req.params.tentti_id, req.params.kysymys_id, req.params.vastausteksti, req.params.oikein], (err) => {
      if (err) {
        return next(err)
      }
      res.send("Vast lisäys ok.")
    })

})

//------------- H A U T
// hakee kaikki tentit (ok)

app.get('/tentit/', (req, res) => {
  db.query('SELECT * FROM tentit ', (err, result) => {
    if (err) {
      return res.send(err)
    }
    res.send(result.rows)
   
  })
})

// hakee tentin id:n mukaan (ok)
app.get('/tentit/:id', (req, res, next) => {
  db.query('SELECT * FROM tentit WHERE id = $1 ORDER BY id', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows[0])
    console.log(result.rows[0])
  })
})



// hakee tentin kysymykset
app.get('/kysymykset/:tentti_id', (req, res, next) => {
  console.log(req.params.id)
  db.query('SELECT * FROM kysymykset WHERE tentti_id = $1 ORDER BY id', [req.params.tentti_id], (err, result) => {
    if (err) {
      return next(err)
    }
    console.log(result.rows)
    res.send(result.rows)
  })
})

// hakee kysymykseen vastausvaihtoehdot (ok)
app.get('/vastaukset/:kysymys_id', (req, res, next) => {
  db.query('SELECT * FROM vastaukset WHERE kysymys_id = $1 ORDER BY id', [req.params.kysymys_id], (err, result) => {
    if (err) {
      return next(err)
    }
    console.log(result.rows)
    res.send(result.rows)
  })
})

//------------- M U O K K A U K S E T
// Tentin nimen muokkaus (ok)

app.put('/muokkaatentti/:id/:uusinimi', (req, res, next) =>{
  db.query('UPDATE tentit SET nimi=$2 WHERE id=$1', [req.params.id, req.params.uusinimi], (err, result) => {
    if (err) {
      return next(err)
    }
    
    res.send("Tentin nimen muokkaus ok.")
  })

})

// Kysymyksen tekstin muokkaus (ok)

app.put('/muokkaakysymys/:tentti_id/:kysymys_id/:uusikysymysteksti', (req, res, next) =>{
  db.query('UPDATE kysymykset SET teksti=$3 WHERE tentti_id=$1 AND id=$2',
   [req.params.tentti_id, req.params.kysymys_id, req.params.uusikysymysteksti], (err, result) => {
    if (err) {
      return next(err)
    }
    
    res.send("Kysymyksen muokkaus ok.")
    console.log("kys muks ok")
  })

})

// vastaus (ok)

app.put('/muokkaavastaus/:id/:kysymys_id/:vastaus_id/:vastausteksti/:oikein', (req, res, next) =>{
  db.query('UPDATE vastaukset SET vastausteksti=$4, oikea=$5 WHERE tentti_id=$1 AND kysymys_id=$2 AND id=$3',
     [req.params.id, req.params.kysymys_id, req.params.vastaus_id,
      req.params.vastausteksti, req.params.oikein], (err, result) => {
    if (err) {
      return next(err)
    }
    console.log("vastauksen muoks ok")
    res.send("Vastauksen muokkaus ok.")
  })

})

//------------- P O I S T O T

app.delete('/poistatentti/:id', (req, res, next) => {
  
  db.query('DELETE FROM tentit WHERE id=$1', [req.params.id], (err, result) => {
  if (err) {
    return next(err)
  }
  res.send('Tentti poistettu')
})
})

app.delete('/poistakysymys/:id', (req, res, next) => {
  
  db.query('DELETE FROM kysymykset WHERE id=$1', [req.params.id], (err, result) => {
  if (err) {
    return next(err)
  }
  res.send('Kysymys poistettu')
})
})

app.delete('/poistavastaus/:id', (req, res, next) => {
  
  db.query('DELETE FROM vastaukset WHERE id=$1', [req.params.id], (err, result) => {
  if (err) {
    return next(err)
  }
  res.send('Vastaus poistettu')
})
})


app.listen(port, () => {
    console.log("Palvelin on päällä portissa: " + port)
})