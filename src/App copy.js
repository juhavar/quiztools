import React, { useEffect } from 'react';
import { useState } from 'react';
import Questions from './Questions'
import ShowAnswers from './ShowAnswers'
import { Container, Checkbox } from '@material-ui/core';
import Button from '@material-ui/core/Button';
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
          q: "Hortensia MacAnkan ensisana?",
          answers: [
            { a: "GLXBLT", checked: false, correctAnswer: true },
            { a: "ROMPS", checked: false, correctAnswer: false },
            { a: "GLOM", checked: false, correctAnswer: false }]
        }
      ]
    },

    {
      exam: "Sekalaiset", questions: [
        {
          q: "Jari Litmasen pituus?",
          answers: [
            { a: "178 cm", checked: false, correctAnswer: false },
            { a: "180 cm", checked: false, correctAnswer: false },
            { a: "182 cm", checked: false, correctAnswer: true }
          ]
        },
        {
          q: "Pizzapohjan raaka-aineet?",
          answers: [
            { a: "Vettä", checked: false, correctAnswer: true },
            { a: "Jauhoja", checked: false, correctAnswer: true },
            { a: "Hiivaa", checked: false, correctAnswer: true },
            { a: "Pieniä kiviä", checked: false, correctAnswer: false },
            { a: "Öljyä", checked: false, correctAnswer: true }
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
    }])

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

  const exams = () => {
   return <div className="main">
        {data.map((exam, index) =>
          <Button key={index}
            onClick={() => selectExam(index)}>
            {exam.exam}</Button>)}

        <div className="askCards">
          {correctAnswersEnabled === false ? data[selectedExamNumber].questions.map((item, index) =>
            <div key={index} className="Card">
              <div className="Question" >{item.q}</div>
              {item.answers ? 
              <Questions index={
                index} examIndex={selectedExamNumber}
                answers={item.answers} 
                selectedAnswer={selectedAnswer}>
              </Questions> : ""}
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
          {<Button className="showbutton" onClick={showCorrectAnswers}>Näytä Vastaukset</Button>}
        </div>
      </div>

  }

  const selectExam = (index) => {
    setSelectedExamNumber(index)
  }

  const selectedAnswer = (event, qIndex, eIndex, aIndex) => {
    let deepCopy = JSON.parse(JSON.stringify(data))
    console.log(deepCopy)
    deepCopy[eIndex].questions[qIndex].answers[aIndex].checked = event.target.checked
    setData(deepCopy)
  }

  const showCorrectAnswers = (item) => {
    setcorrectAnswersEnabled(true)
  }

  const modeSetter = (mode) => {
    setAdminMode(mode);
  }


    ;

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Button color="link" onClick={()=>modeSetter(false)}>Tentit</Button>
          <Button color="link">Tietoa sovelluksesta</Button>
          <Button color="link" onClick={()=>modeSetter(true)}>Hallinta</Button>
        </nav>
      </header>
      
    <div>{adminMode ? "" : exams()  }</div>
      

    </div>
  );
}

export default App;