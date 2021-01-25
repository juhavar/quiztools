const db = require('../db')

User.create = async (newUser) => {
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
}