var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
 
var app = express()
module.exports = app
var port = process.env.PORT || 5000
app.use(bodyParser.json())
//https://expressjs.com/en/resources/middleware/cors.html
app.use(cors())
const db = require('./db')

//------------- L U O M I S E T

// luodaan tentti (ok)

app.post('/lisaatentti/:nimi', (req, res, next) => {
  db.query('INSERT INTO tentit(nimi) VALUES ($1)',
    [req.params.nimi], (err) => {
      if (err) {
        return next(err)
      }
      res.send("Tentin lisäys ok.")
    })

})

// luodaan kysymys (ehkä ok)

app.post('/lisaakysymys/:tentti_id/:teksti', (req, res, next) => {
  db.query('INSERT INTO kysymykset(tentti_id, teksti) VALUES ($1, $2)',
    [req.params.tentti_id, req.params.teksti], (err) => {
      if (err) {
        return next(err)
      }
      res.send("Kysymyksen lisäys ok.")
    })

})

// luodaan vastaus (toimii)

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
  db.query('SELECT * FROM tentit WHERE id = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows[0])
  })
})

// hakee tentin kysymykset (ok)
app.get('/kysymykset/:id', (req, res, next) => {
  console.log(req.params.id)
  db.query('SELECT * FROM kysymykset WHERE tentti_id = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    console.log(result.rows)
    res.send(result.rows)
  })
})

// hakee kysymykseen vastausvaihtoehdot (ok)
app.get('/vastaukset/:id', (req, res, next) => {
  db.query('SELECT * FROM vastaukset WHERE kysymys_id = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    console.log(result.rows)
    res.send(result.rows)
  })
})

//------------- M U O K K A U K S E T
// Tentin nimen muokkaus (ok)

app.put('/muokkaatentti/:id/:uusnimi', (req, res, next) =>{
  db.query('UPDATE tentit SET nimi=$2 WHERE id=$1', [req.params.id, req.params.uusnimi], (err, result) => {
    if (err) {
      return next(err)
    }
    
    res.send("Tentin nimen muokkaus ok.")
  })

})

// Kysymyksen muokkaus (ok)

app.put('/muokkaakysymys/:id/:uuskysymys', (req, res, next) =>{
  db.query('UPDATE kysymykset SET teksti=$2 WHERE id=$1', [req.params.id, req.params.uuskysymys], (err, result) => {
    if (err) {
      return next(err)
    }
    
    res.send("Kysymyksen muokkaus ok.")
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
    console.log(result.rows)
    res.send("Vastauksen muokkaus ok.")
  })

})

//------------- P O I S T O T
// jatkuu tästä

app.post('/poistatentti', (req, res) => {
  
  console.log(req.body)
  res.send('Tähän tulee sitten dataa tietokannasta tai jotain muuta')
})

// lisäys
/* app.post('/', (req, res, next) => {
  const body = req.body
  console.log(body)
  
  if (!res.body)
    return res.status(400).json({
      error: "Tieto puuttuu"
    })
  
  db.query('INSERT INTO tentit(nimi) VALUES (hei)', [body.tentit], (err, result) =>{
    if (err)
      return next(err)
  res.send(result.rows)
  })
})
app.post('/lisaatentti', (req, res, next) => {
  const body = req.body
  console.log(body)
  
/*   if (!res.body)
    return res.status(400).json({
      error: "Tieto puuttuu"
    })
   */
/*   db.query(`INSERT INTO tentit(nimi) VALUES ('body')`, [body.tentit], (err, result) =>{
    if (err)
      return next(err)
    else {
      console.log('?')
      return res.json({
        data: result
      })
    }
  }) */
//}) */
app.post('/haekaikkitentit', (req, res) => {
  
  console.log(req.body)
  res.send('Tähän tulee sitten dataa tietokannasta tai jotain muuta')
})
app.listen(port, () => {
    console.log("Palvelin käynnistyi portissa: " + port)
})