import axios from 'axios';

var host = null
switch (process.env.NODE_ENV) {
  case 'production':
    host = 'https://jv-quiztool.herokuapp.com'
    break
  case 'development':
    host = 'http://localhost:5000'
    break
  case 'test':
    host = 'http://localhost:5000'
    break
  default:
    throw "Environment not properly set!"
    break
}

axios.defaults.headers = {
  'Content-type': 'application/json',
  token: localStorage.token,
  admin: localStorage.admin
}

export async function getExam() {
  console.log("kukkuu")
  try {
    axios
      .get(host + "/tentit")
      .then(response => {
        console.log("response.data", response.data)
        return response.data
      })
  }
  catch(exception){
    console.log("Error")
  }
}

export async function login(userData) {
  
  try {
    let result = 
    await axios
      .post(host + `/login/`, userData)
    return result.data
  }
  catch (exception){
    return exception
  }
}

export async function register(userData) {
  try {
    let result = 
    await
        axios
            .post(host + `/register/${userData.etunimi}/${userData.sukunimi}/${userData.email}/${userData.salasana}/${userData.admin}`)

} catch (e) {
    console.log("registration error")
}
}

export async function addExam(examName) {
  try {
    axios
      .post(host + `/lisaatentti/${examName}`)
  }
  catch (exception) {
    console.log("Tentin lisääminen mättää")
  }
}

export async function changeExamName(examID, examName) {
  try {
    axios
      .put(host + `/muokkaatentti/${examID}/${examName}`)
  }
  catch (exception) {
    console.log("Tentin nimen vaihto mättää")
  }
}

export async function deleteExam(examID) {
  try {
    axios
      .delete(host + `/poistatentti/${examID}`)
  }
  catch (exception) {
    console.log("Tentin poistossa häikkää")
  }
}

export async function addQuestion(examID) {
  try {
    axios
      .post(host + `/lisaakysymys/${examID}/'`)
  }
  catch (exception) {
    console.log("Kysymyksen lisäys kosahti")
  }

}

export async function changeQText(examID, questionID, event) {
  try {
    /*     if (questionText !== event.target.value.toString())
        { */
    //console.log(token)
    axios
      .put(host + `/muokkaakysymys/${examID}/${questionID}/${event.target.value.toString()}`)


    /* }
      else return */
  }
  catch (exception) {
    console.log("Ei voitu muuttaa kysymyksen tekstiä.")
  }
}

export async function deleteQuestion(questionID) {
  try {
    axios
      .delete(host + `/poistakysymys/${questionID.id}`)
  }
  catch (exception) {
    console.log("Ei voitu poistaa kysymystä")
  }
}

export async function addAnswer(examID, questionID) {
  try {
    axios
      .post(host + `/lisaavastaus/${questionID}/' '/false`)
    //setExam(examID)
  }
  catch (exception) {
    console.log("Ei voitu lisätä vastausta.")
  }
}
export async function changeText(examID, questionID, item, event) {
  //setQuestionID(props.questionID)
  try {
    axios
      .put(host + `/muokkaavastaus/${questionID}/${item.id}/${event.target.value}/${item.oikea}/`)
  }
  catch (exception) {
    console.log("ei muutettu vastauksen tekstiä")
  }
}

export async function handleCheck(examID, questionID, item, event) {
  try {
    axios
      .put(host + `/muokkaavastaus/${examID}/${questionID}/${item.id}/${item.vastausteksti}/${event.target.checked}/`)
  }
  catch (exception) {
    console.log("oikean vastauksen vaihto ei onnistunut")
  }
}

export async function deleteAnswer(item) {
  try {
    axios
      .delete(host + `/poistavastaus/${item.id}`)
  }
  catch (exception) {
    console.log("vastauksen poisto mättää")
  }
}
