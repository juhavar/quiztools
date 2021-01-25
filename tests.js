// yksikkötestauksen testauksen esimerkkejä, ei liity projektiin
// require eikä export että näkyy kun ollaan noden puolella
const funktiot = require('./moduuli')
let onnistuneet = 0;
let ajetut = 0;

//testSuite
//testCase
const setUp = () => {
    // alustukset
}
const tearDown = () => {
    // puretaan resurssivaraukset, suljetaan tiedostokahvat jne...
}
const testSumma1 = () => {
    ajetut++
    let palautui = funktiot.summa(1, 2)
    if (palautui == 3) {
        onnistuneet++
        console.log("summa-funktion testi onnistui")
    } else {
        console.log("summa-funktion testi epäonnistui")
    }
}
const testSumma2 = () => {
    ajetut++
    let palautui = funktiot.summa(1, "1")
    if (palautui == "anna appelsiineja") {
        onnistuneet++
        console.log("summa-funktion testi onnistui")
    } else {
        console.log("summa-funktion testi epäonnistui")
    }
}

const testTulo = () => {
    ajetut++
    let palautui = funktiot.tulo(1, 2)
    if (palautui == 2) {
        onnistuneet++
        console.log("summa-funktion testi onnistui")
    } else {
        console.log("summa-funktion testi epäonnistui")
    }
}
setUp()
testSumma1()
testSumma2()
tearDown()
testTulo()
console.log("Testitulos: ", onnistuneet,"/", ajetut)