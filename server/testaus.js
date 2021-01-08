var bcrypt = require('bcrypt')
const SALT_ROUNDS = 10

function haloo () {
  return 'haloo'
}

function merkkijono() {
  return "merkkejä"
}
function vuosiLuku() {
  let vuosi = new Date()
  return ('Nyt on vuosi:', vuosi.getFullYear())
}

async function salasana() {
  try{
      let hashattySalasana = await bcrypt.hash("etunimijasyntymäaika", SALT_ROUNDS)
      let result = await bcrypt.compare("etunimijasyntymäaika", hashattySalasana)
      return result
  } catch (e){
      console.log(e)
      return e
    }
}

async function eriSalasana(salasana) {
  try{
      let hashattySalasana = await bcrypt.hash(salasana, SALT_ROUNDS)
      let result = await bcrypt.compare("etunimijasyntymäaika", hashattySalasana)
      return result
  } catch (e){
      console.log(e)
      return e
  }
}

module.exports = {
  haloo: haloo,
  merkkijono: merkkijono,
  vuosiLuku: vuosiLuku,
  salasana: salasana,
  eriSalasana: eriSalasana
}