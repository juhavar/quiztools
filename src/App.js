import React, { useEffect } from 'react';
import { useState } from 'react';
import Questions from './Questions'
import ShowAnswers from './ShowAnswers' 
import { Container, Checkbox } from '@material-ui/core';
import Button from '@material-ui/core/Button';
//import './App.css';

function App() {
  
  const [dataAlustettu, setDataAlustettu] = useState([]);
  const [selectedExamNumber, setSelectedExamNumber] = useState(0);
  const [ret, setRet] = useState(false)
 // const [checked, setChecked] = useState([]);

 const [data, setData] = useState([
    {exam: "Exam 1",  questions:[ 
      {q: "Rahat vai kolmipyörä?",
      
      answers: [
        {a: "Rahat", checked: false, correctAnswer: false},
        {a: "Kolmipyörä",checked: false, correctAnswer: true},
        ]
    },
    {  q: "Akun veljenpojat",
       answers: [
         {a: "Tupu", checked: false, correctAnswer: true},
         {a: "Hupu", checked: false, correctAnswer: true},
         {a: "Lupu", checked: false, correctAnswer: true}]
    },
    {  q: "Hortensia",
       answers: [
         {a: "GLXBLT", checked: false, correctAnswer: true}, 
         {a: "ROMPS", checked: false, correctAnswer: false},
         {a: "GLOM", checked: false, correctAnswer: false}]
    }
  ]},

  {exam: "exam 2", questions:[
    { q: "Jaska on?",
      answers: [
        {a: "Jokunen", checked: false, correctAnswer: true},
        {a: "Jakamoinen",checked: false, correctAnswer: false},
        ]
    },
    {  q: "Kakun ainesosat",
       answers: [
         {a: "Sokeri", checked: false, correctAnswer: true},
         {a: "Jauhot", checked: false, correctAnswer: true}
       ]
         
    },
    {  q: "Nouseeko Haka?",
       answers: [
         {a: "Kyllä", checked: false, correctAnswer: false}, 
         {a: "Ei", checked: false, correctAnswer: false},
         {a: "Nousi jo", checked: false, correctAnswer: true}]
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

  const selectedAnswer = (event, qIndex, eIndex, aIndex) => {
    let deepCopy = JSON.parse(JSON.stringify(data))
    console.log(deepCopy)
    deepCopy[eIndex].questions[qIndex].answers[aIndex].checked = event.target.checked
    setData(deepCopy)
  }

  /*   const optChange =(e, index) =>{
    let deepCopy = JSON.parse(JSON.stringify(data));
    deepCopy[[index].[index]].checked = e.target.checked;
    setData(deepCopy);
      
  }
   */

  const showAnswers = (item) => {
    setRet(true)
    }

  const selectExam = (index) => {
    setSelectedExamNumber(index)
  }

  /* const showOptions = (opt) => {
    return opt.map((item, index) => <div>
      <input 
        onChange={(e) => optChange(e, index)}
        type="checkbox"
        // checked = {item.checked}
        name = {item.text}></input>
        <label for={item.text}>{item.text}</label>
    </div>
    )
  } */
  ;

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li><a className="active" href="#home">Tentit</a></li>
          <li><a href="#about">Tietoa sovelluksesta</a></li>
        </ul>
      </header>
      <div className="main">
        {data.map((exam, index)=>
        <button key={index} 
        onClick={()=>selectExam(index)}>
          {exam.exam}</button>)}
        <div className="askCards">
          {ret === false ? data[selectedExamNumber].questions.map((item, index) => 
          <div key={index} className="Card">
            <div className="Question" >{item.q}</div>
            {item.answers ? <Questions index={index} examIndex={selectedExamNumber} answers={item.answers} selectedAnswer={selectedAnswer}>
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
          {<button className="showbutton" onClick={showAnswers}>Näytä Vastaukset</button>}
        </div>
      </div>
    </div>
  );
}

export default App;