var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt')
const SALT_ROUNDS = 10
let alkuhetki = Date.now()
let loppuhetki 
let hashattySalasana

/* bcrypt.hash("ik_heet_kissa", SALT_ROUNDS, (err, hash) => {
    // hash tallennetaan sit tietokantaan
    hashattySalasana = hash
    loppuhetki = Date.now()
    console.log("operaatio kesti (ms): ", loppuhetki-alkuhetki)
    // Store hash in your password DB.

    
}); */
(async () => {
try{
    hashattySalasana = await bcrypt.hash("ik_heet_kissa", SALT_ROUNDS)
    console.log(hashattySalasana)
    
    let result = await bcrypt.compare("ik_heet_kisa", hashattySalasana)
    console.log(result)
} catch (e){
    console.log(e)

}
})();   //IIFE Immediately invoked function expression


/* bcrypt.compare("ik_heet_kissa", hashattySalasana, function(err, result) {
    if(err){
        console.log(err)
    }
    console.log(result)
});
 */

// Load hash from your password DB.

// 1. kerran login, missä tehdään token
/* var token1 = jwt.sign({ foo: 'bar' }, 'shhhhh');
//var token2 = jwt.sign({ foo: 'bar' }, 'shhhhh');

token2 = token1.substring(0,10)
console.log("Alkuperäinen token", token1)
console.log("Sormeiltu token", token1)
try {
    let result = jwt.verify(token2, 'shhhhh')
    console.log("Token verifioitu", result)
} catch(e) {
    console.log("token ei voi kovin hyvin")
}
 */
//console.log(token1)