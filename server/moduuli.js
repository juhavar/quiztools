// yksikkötestauksen testausta


const onkoLukuja=(x)=>{
//tyyppiturvallinen ohjelmointikieli TypeScript, Java, Kotlin, C++.....
//kun ei olla niin oletetaan että saadaan taulukko
    return x.every(item=>{
        return typeof item=='number'
    })
}

const summa=(a,b) => {
    if(onkoLukuja([a,b])){
    return a+b
    }
    else{
        return "anna appelsiineja"
    }
}

const tulo=(a,b)=>{
    return a*b
}

module.exports = {
    summa: summa,
    tulo:tulo
}