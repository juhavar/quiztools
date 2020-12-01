import React, { useState, useEffect, useReducer } from 'react';

import Answers from './Anwers'
import AdminEdit from './AdminEdit'
import ShowAnswers from './ShowAnswers'
import { Container, Checkbox } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircle from '@material-ui/icons/AddCircle';
import Card from '@material-ui/core/Card';


import './App.css';

function App() {

  const [dataAlustettu, setDataAlustettu] = useState([]);
  const [selectedExamNumber, setSelectedExamNumber] = useState(0);
  const [correctAnswersEnabled, setcorrectAnswersEnabled] = useState(false);
  const [adminMode, setAdminMode] = useState(0);


  const [data, setData] = useState([
    {
      exam: "Aku Ankka", questions: [
        {
          q: "Rahat vai kolmipyörä?",

          answers: [
            { a: "Rahat", checked: false, correctAnswer: false },
            { a: "Kolmipyörä", checked: false, correctAnswer: true },
          ]
        },
        {
          q: "Akun veljenpojat?",
          answers: [
            { a: "Tupu", checked: false, correctAnswer: true },
            { a: "Hupu", checked: false, correctAnswer: true },
            { a: "Lupu", checked: false, correctAnswer: true }]
        },
        {
          q: "Elämme...",
          answers: [
            { a: "yhteiskunnassa", checked: false, correctAnswer: false },
            { a: "kovia aikoja, ystävä hyvä.", checked: false, correctAnswer: true }]
        }
      ]
    },

    {
      exam: "Jalkapallo", questions: [
        {
          q: "Jari Litmasen pituus?",
          answers: [
            { a: "178 cm", checked: false, correctAnswer: false },
            { a: "180 cm", checked: false, correctAnswer: false },
            { a: "182 cm", checked: false, correctAnswer: true }
          ]
        },
        {
          q: "Nouseeko Haka?",
          answers: [
            { a: "Kyllä", checked: false, correctAnswer: false },
            { a: "Ei", checked: false, correctAnswer: false },
            { a: "Nousi jo", checked: false, correctAnswer: true }]
        }
      ]
    },
    {
      exam: "Ruoka", questions: [
        {
          q: "Hyvän leivän raaka-aineet?",
          answers: [
            { a: "Vettä", checked: false, correctAnswer: true },
            { a: "Jauhoja", checked: false, correctAnswer: true },
            { a: "Hiivaa", checked: false, correctAnswer: true },
            { a: "Pieniä kiviä", checked: false, correctAnswer: false },
            { a: "Öljyä", checked: false, correctAnswer: true }
          ]
        },
        {
          q: "Onko nälkä?",
          answers: [
            { a: "Ehkä", checked: false, correctAnswer: false },
            { a: "Ei vielä", checked: false, correctAnswer: false }
          ]
        }]

    }

  ])

useEffect(() => {
  let jemma = window.localStorage;
  let uusidata = jemma.getItem("data")
  if (!uusidata) {
    jemma.setItem("data", JSON.stringify(data))
    uusidata = data
  } else {
    setData(JSON.parse(uusidata));
  }
}, [])

useEffect(() => {
  window.localStorage.setItem("data", JSON.stringify(data))
}, [data])

/* const exams = () => {
  return <div className="main">
    {data.map((exam, index) =>
      <Button key={index}
        onClick={() => selectExam(index)}>
        {exam.exam}</Button>)}

    <div className="questions">
      {correctAnswersEnabled === false ? data[selectedExamNumber].questions.map((item, index) =>
        <div key={index} className="Card">
          <div className="Question" >{item.q}</div>
          {item.answers ?
            <Answers
              index={index}
              examIndex={selectedExamNumber}
              answers={item.answers}
              selectedAnswer={selectedAnswer}>
            </Answers> : ""}
        </div>)
        :
        data[selectedExamNumber].questions.map((item, index) =>
          <div key={index} className="Card">
            <div className="Question" >{item.q}</div>
            {item.answers ?
              <ShowAnswers index={index}
                checked={data.checked} answers={item.answers}
                selectedAnswer={selectedAnswer}>
              </ShowAnswers> : ""}
          </div>)}
      {<Button className="showbutton" onClick={setCorrectAnswerstoEnabled}>Näytä Vastaukset</Button>}
    </div>
  </div>

} */

const selectExam = (index) => {
  setSelectedExamNumber(index)
}

const selectedAnswer = (event, qIndex, eIndex, aIndex) => {
  let deepCopy = JSON.parse(JSON.stringify(data))
  console.log(deepCopy)
  deepCopy[eIndex].questions[qIndex].answers[aIndex].checked = event.target.checked
  setData(deepCopy)
}

const setCorrectAnswerstoEnabled = () => {
  setcorrectAnswersEnabled(true)
}

const modeSetter = (mode) => {
  setAdminMode(mode);
}

// H A L L I N T A - O S A

const admin = () => {
  return <div className="admin">
    {data.map((exam, index) =>
      <Button key={index}
        onClick={() => selectExam(index)}>
        {exam.exam}</Button>)}
      
      <Card className="questions" variant="outlined">
        
        {data[selectedExamNumber].questions.map((question, qIndex) =>
          <div key={qIndex} className="Card">
            <div className="Question" >
              <Checkbox type="text"
                onChange={(e) => questionChanged(e, selectedExamNumber, qIndex)}
                defaultValue={question.q}></Checkbox>
              <DeleteIcon onClick={(e) => deleteQuestion(e, selectedExamNumber, qIndex)}></DeleteIcon>
            </div>
            <Card>
            {question.answers ?
              <AdminEdit
                index={qIndex}
                examIndex={selectedExamNumber}
                answers={question.answers}
                selectedCorrectAnswer={selectedCorrectAnswer}
                answerChanged = {answerChanged}
                addAnswer = {addAnswer}
                deleteAnswer = {deleteAnswer}
                >
              </AdminEdit> : ""}
              <AddCircle onClick={() => addQuestion(selectedExamNumber)}></AddCircle>   
              </Card>
          </div>
          
          )
              
        }
        <div><button onClick={() => addExam()}>+ tentti</button></div>

      </Card>

    </div>
}

const addQuestion = (eIndex) => {
  let deepCopy = JSON.parse(JSON.stringify(data))
  let newQuestion = {q: "", answers: [{ a: "", checked: false, correctAnswer: false }]};
  console.log(deepCopy)
  deepCopy[eIndex].questions.push(newQuestion);
  setData(deepCopy);
}

const questionChanged = (e, eIndex, qIndex) => {
  let deepCopy = JSON.parse(JSON.stringify(data))
  deepCopy.[eIndex].questions.[qIndex].q = e.target.value;
  setData(deepCopy)
}

const deleteQuestion = (e, eIndex, qIndex) => {
  let deepCopy = JSON.parse(JSON.stringify(data))
  console.log(deepCopy)
  deepCopy[eIndex].questions.[qIndex].q = e.target.value;
  let delQ = deepCopy[eIndex].questions;
  delQ.splice(qIndex,1);
  deepCopy[eIndex].questions = delQ;
  setData(deepCopy)
}

const addAnswer = (eIndex, qIndex) => {
  let deepCopy = JSON.parse(JSON.stringify(data))
  let newAnswer = { a: "", checked: false, correctAnswer: false };
  console.log(deepCopy)
  deepCopy[eIndex].questions[qIndex].answers.push(newAnswer);
  setData(deepCopy);
}

const answerChanged = (e, qIndex, eIndex, aIndex) => {
  let deepCopy = JSON.parse(JSON.stringify(data))
  deepCopy.[eIndex].questions[qIndex].answers[aIndex].a = e.target.value;
  setData(deepCopy)
}

const deleteAnswer = (e, eIndex, qIndex, aIndex) => {
  let deepCopy = JSON.parse(JSON.stringify(data))
  deepCopy[eIndex].questions.[qIndex].answers.[aIndex].a = e.target.value;
  let delA = deepCopy[eIndex].questions.[qIndex].answers;
  delA.splice(aIndex,1);
  setData(deepCopy);
}

const selectedCorrectAnswer = (event, qIndex, eIndex, aIndex) => {
  let deepCopy = JSON.parse(JSON.stringify(data))
  console.log(deepCopy)
  deepCopy[eIndex].questions[qIndex].answers[aIndex].correctAnswer = event.target.correctAnswer
  console.log(deepCopy)
  setData(deepCopy)
}

const addExam = () => {
  let deepCopy = JSON.parse(JSON.stringify(data))
  let newExam = {exam: "uusi", questions: [{q: "", answers: [{ a: "", checked: false, correctAnswer: false }]}]};
  deepCopy.push(newExam);
  setData(deepCopy);
}

  ;

return (
  <div className="App">
    <header className="App-header">
      <nav>
        <Button color="link" onClick={() => modeSetter(false)}>Tentit</Button>
        <Button color="link">Tietoa sovelluksesta</Button>
        <Button color="link" onClick={() => modeSetter(true)}>Hallinta</Button>
      </nav>
    </header>

    <div className="admin">{admin() }</div>


  </div>
);
}

export default App;