import React, { useEffect, useState, useReducer } from 'react';
import Answers from './Answers'
//import AdminEdit from './AdminEdit'
import ShowAnswers from './ShowAnswers'
import { Container, Checkbox } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircle from '@material-ui/icons/AddCircle';
import Card from '@material-ui/core/Card';
import uuid from 'react-uuid';


import './App.css';

function reducer(state, action) {
  let deepCopy = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    

    case 'addQuestion':
      let newQuestion = { q: "", answers: [{ a: "", checked: false, correctAnswer: false }] };
      deepCopy[action.data.selectedExamNumber].questions.push(newQuestion);
      return deepCopy;

    case 'questionChanged':
      deepCopy[action.data.selectedExamNumber].questions[action.data.qIndex].q = action.data.newQtext;
      return deepCopy;


    case 'deleteQuestion':
      deepCopy[action.data.selectedExamNumber].questions.splice(action.data.qIndex, 1);
      return deepCopy;

    case 'addAnswer':
      deepCopy[action.data.selectedExamNumber].questions[action.data.qIndex].answers.push("");
      return deepCopy;


    case 'answerChanged':
      deepCopy[action.data.selectedExamNumber].questions[action.data.qIndex].answers[action.data.aIndex].a = action.data.newAText;
      return deepCopy;


    case 'deleteAnswer':
      deepCopy[action.data.selectedExamNumber].questions[action.data.qIndex].answers.splice(action.data.aIndex, 1);
      return deepCopy;

    case 'selectedAnswer':
      deepCopy[action.data.selectedExamNumber].questions[action.data.qIndex].answers.checked = action.data.checked;
      return deepCopy;

    case 'initData':
      return action.data;
    default:
      throw new Error();
  }
}

function App() {

  const [dataAlustettu, setDataAlustettu] = useState([]);
  const [selectedExamNumber, setSelectedExamNumber] = useState(-1);
  const [correctAnswersEnabled, setcorrectAnswersEnabled] = useState(false);
  const [adminMode, setAdminMode] = useState(0);

  const [data, setData] = useState([]);

  
  const examsList = [
    {uid: uuid(), name:"Aku Ankka", exam: "Aku Ankka", questions: [
        
          {uid: uuid(), q: "Rahat vai kolmipyörä?",

          answers: [
            {uid: uuid(), a: "Rahat", checked: false, correctAnswer: false, wasAnswerCorrect: false },
            {uid: uuid(), a: "Kolmipyörä", checked: false, correctAnswer: true, wasAnswerCorrect: false },
          ]
        },
        {uid: uuid(), q: "Akun veljenpojat?",
          answers: [
            {uid: uuid(), a: "Tupu", checked: false, correctAnswer: true },
            {uid: uuid(), a: "Hupu", checked: false, correctAnswer: true },
            {uid: uuid(), a: "Lupu", checked: false, correctAnswer: true }]
        },
        {
          uid: uuid(),q: "Elämme...",
          answers: [
            {uid: uuid(), a: "yhteiskunnassa", checked: false, correctAnswer: false },
            {uid: uuid(), a: "kovia aikoja, ystävä hyvä.", checked: false, correctAnswer: true }]
        }
      ]
    },

    {uid: uuid(),
      exam: "Jalkapallo", questions: [
        {uid: uuid(),
          q: "Jari Litmasen pituus?",
          answers: [
            {uid: uuid(), a: "178 cm", checked: false, correctAnswer: false },
            {uid: uuid(), a: "180 cm", checked: false, correctAnswer: false },
            {uid: uuid(), a: "182 cm", checked: false, correctAnswer: true }
          ]
        },
        {uid: uuid(),
          q: "Nouseeko Haka?",
          answers: [
            {uid: uuid(), a: "Kyllä", checked: false, correctAnswer: false },
            {uid: uuid(), a: "Ei", checked: false, correctAnswer: false },
            {uid: uuid(), a: "Nousi jo", checked: false, correctAnswer: true }]
        }
      ]
    },
    {uid: uuid(),
      exam: "Ruoka", questions: [
        {uid: uuid(),
          q: "Hyvän leivän raaka-aineet?",
          answers: [
            {uid: uuid(), a: "Vettä", checked: false, correctAnswer: true },
            {uid: uuid(), a: "Jauhoja", checked: false, correctAnswer: true },
            {uid: uuid(), a: "Hiivaa", checked: false, correctAnswer: true },
            {uid: uuid(), a: "Pieniä kiviä", checked: false, correctAnswer: false },
            {uid: uuid(), a: "Öljyä", checked: false, correctAnswer: true }
          ]
        },
        {uid: uuid(),
          q: "Onko nälkä?",
          answers: [
            {uid: uuid(), a: "Ehkä", checked: false, correctAnswer: false },
            {uid: uuid(), a: "Ei vielä", checked: false, correctAnswer: false }
          ]
        }]

    }

  ]

  const [state, dispatch] = useReducer(reducer, examsList);

  useEffect(() => {
    let jemma = window.localStorage;
    let uusidata = jemma.getItem("data")
    if (uusidata == null) {
      jemma.setItem("data", JSON.stringify(examsList))
      uusidata = examsList
    } else {
      setData(JSON.parse(uusidata));
      setDataAlustettu(true);
    }
  }, [])

  useEffect(() => {
    if (dataAlustettu) {
      window.localStorage.setItem("data", JSON.stringify(state))
    }
  }, [state])

  const exams = () => {
    return <div className="main">
      {state.map((exam, index) =>
        <Button key={index}
          onClick={() => selectExam(index)}>
          {exam.exam}</Button>)}

      <div >
        {state[selectedExamNumber] !== undefined} ?
        {correctAnswersEnabled === false ? state[selectedExamNumber].questions.map((item, index) =>
          <div key={index} className="Card">
            <div className="Question" >{item.q}</div>
            {item.answers ?
              <Answers
                dispatch={dispatch}
                examIndex={state[selectedExamNumber]}
                answers = {item.answers}
                /* selectedAnswer = {selectedAnswer} */
                /* index={index}
                examIndex={selectedExamNumber}
                answers={item.answers}
                selectedAnswer={selectedAnswer}*/
                > 
              </Answers> : ""}
          </div>)
          :
          state[selectedExamNumber].questions.map((item, index) =>
            <div key={index} className="Card">
              <div className="Question" >{item.q}</div>
              {item.answers ?
                <ShowAnswers index={index}
                  checked={data.checked} answers={item.answers}
                  /* selectedAnswer={selectedAnswer} */>
                </ShowAnswers> : ""}
            </div>)}
        {<Button className="showbutton" onClick={setCorrectAnswerstoEnabled}>Näytä Vastaukset</Button>}
      </div>
    </div>

  }

  const selectExam = (index) => {
    setSelectedExamNumber(index)
  }

/*   const selectedAnswer = (event, qIndex, eIndex, aIndex) => {
    let deepCopy = JSON.parse(JSON.stringify(data))
//    console.log(deepCopy)
    deepCopy[eIndex].questions[qIndex].answers[aIndex].checked = event.target.checked
    setData(deepCopy)
  } */


  const setCorrectAnswerstoEnabled = () => {
    setcorrectAnswersEnabled(true);

  
  }

  const modeSetter = (mode) => {
    setAdminMode(mode);
  }

  // H A L L I N T A - O S A

  const admin = () => {
    return <div className="admin">
      {state.map((exam, index) =>
        <Button key={exam.uid}
          onClick={() => selectExam(index)}>
          {exam.exam}</Button>)}

      <Card className="questions" variant="outlined">

        {state[selectedExamNumber].questions.map((question, qIndex) =>
          <div key={qIndex.uid} className="Card">
            <div className="Question" >
              <Checkbox type="text"
                onChange={(e) =>
                  dispatch({
                    type: 'questionChanged',
                    data: { selectedExamNumber: selectedExamNumber, qIndex: qIndex, newQtext: e.target.value }
                  })}
                value={question.q}></Checkbox>
              <DeleteIcon onClick={(e) => dispatch({
                type: 'deleteQuestion',
                data: { selectedExamNumber: selectedExamNumber, qIndex: qIndex }
              })}></DeleteIcon>
            </div>
            <Card>
              {question.answers.map((i, answerIndex) =>
              
              <div key={answerIndex}>

                {/* <input type="checkbox"
                  // onChange={(e) => { selectedCorrectAnswer(e, index, examIndex, answerIndex) }}
                  selectedCorrectAnswer={i.correctAnswer} defaultValue={i.correctAnswer} /> */}
                <Checkbox type="text"
                  onChange={(e) => dispatch({ type: 'answerChanged', data: { selectedExamNumber: selectedExamNumber, qIndex: qIndex, answerIndex: answerIndex } })}
                  defaultValue={i.a}
                ></Checkbox>
                <DeleteIcon onClick={(e) => dispatch({ type: 'deleteAnswer', data: { selectedExamNumber: selectedExamNumber, qIndex: qIndex, answerIndex: answerIndex } })}></DeleteIcon>

              </div>)
              }
              <div><AddCircle onClick={(e) => dispatch({ type: 'addAnswer', data:{selectedExamNumber: selectedExamNumber, qIndex:qIndex }})}></AddCircle></div>
   

              

              
            <AddCircle onClick={() => dispatch({ type: 'addQuestion', data: { selectedExamNumber } })}></AddCircle>
            </Card>
          </div>

        )

        }
        <div><button onClick={() => addExam()}>+ tentti</button></div>

      </Card>

    </div >
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
  let newExam = { exam: "uusi", questions: [{ q: "", answers: [{ a: "", checked: false, correctAnswer: false }] }] };
  deepCopy.push(newExam);
  setData(deepCopy);
}


  



  ;

return (
  <div className="App">
    <header className="App-header">
      <nav>
        <Button color="link" onClick={() => modeSetter(false)}>Tentit</Button>
        <Button color="link" >Tietoa sovelluksesta</Button>
        <Button color="link" onClick={() => modeSetter(true)}>Hallinta</Button>
      </nav>
    </header>

    <div>{adminMode ? admin() : exams()}</div>
    
  </div>
);
}

export default App;