import React, { useEffect, useState, useReducer } from 'react';
import Answers from './Answers'
import AdminEdit from './AdminEdit'
import ShowAnswers from './ShowAnswers'
import { Container, Checkbox } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircle from '@material-ui/icons/AddCircle';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';


import Paper from '@material-ui/core/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
  } from '@devexpress/dx-react-chart-material-ui';
  
  import { Animation } from '@devexpress/dx-react-chart';


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

/*     case 'chartDataChange':
      deepCopy[0].oikein = action.data.newChartValue;
      return deepCopy; */

    case 'initData':
      return action.data;
    default:
      throw new Error();
  }
}

function App() {

  const [dataAlustettu, setDataAlustettu] = useState([]);
  const [selectedExamNumber, setSelectedExamNumber] = useState(0);
  const [correctAnswersEnabled, setcorrectAnswersEnabled] = useState(false);
  const [adminMode, setAdminMode] = useState(0);
  const [state, dispatch] = useReducer(reducer, []);
  //const [chartData, setChartData] = useState([]);

/*   const [chartData, setChartData] =useState( [
    { kysymys: '1', oikein: 0 },
    { kysymys: '2', oikein: 10 },
    { kysymys: '3', oikein: 100 },
  
  ]) */

  const [data, setData] = useState([
    {
      exam: "Aku Ankka", questions: [
        {
          q: "Rahat vai kolmipyörä?",

          answers: [
            { a: "Rahat", checked: false, correctAnswer: false, wasAnswerCorrect: false },
            { a: "Kolmipyörä", checked: false, correctAnswer: true, wasAnswerCorrect: false },
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

  const exams = () => {
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

  }

  const selectExam = (index) => {
    setSelectedExamNumber(index)
  }

  const selectedAnswer = (event, qIndex, eIndex, aIndex) => {
    let deepCopy = JSON.parse(JSON.stringify(data))
//    console.log(deepCopy)
    deepCopy[eIndex].questions[qIndex].answers[aIndex].checked = event.target.checked
    setData(deepCopy)
  }



  const [chartData,setChartData] = useState([
    { aihealue: 'ATK:n perusteet', Points: 5, MaxPoints: 10, Percentage: 50 },
    { aihealue: 'Biologian alkeet', Points: 2, MaxPoints: 10, Percentage: 20 },
    { aihealue: 'Matikkan lopputentti', Points: 10, MaxPoints: 10, Percentage: 100 },
    { aihealue: 'Kemian pääsykoe', Points: 8, MaxPoints: 10,Percentage: 80 },
    { aihealue: 'Biologian jatkoa ', Points: 5, MaxPoints: 10,Percentage: 50 },
    { aihealue: 'Terveystiedon alkeet', Points: 9, MaxPoints: 10,Percentage: 90},
  ]);
  const numberChange = (event, index) => {
    console.log(event.target.value)
    console.log(index)
    var newNumber = event.target.value;
    var dataCopy = [...chartData]
    dataCopy[index].Points = newNumber;
    dataCopy[index].Percentage = newNumber/dataCopy[index].MaxPoints*100
    setChartData(dataCopy)
  }
  const maxPointChange = (event, index) => {
    console.log(event.target.value)
    console.log(index)
    var newNumber = event.target.value;
    var dataCopy = [...chartData]
    dataCopy[index].MaxPoints = newNumber;
    dataCopy[index].Percentage = dataCopy[index].Points/newNumber*100
    setChartData(dataCopy)
  }

  const feedback = () => {
    
  return( 
    <div><Paper>
    {chartData.map((value, index) => {
            return (
              <div>
              <TextField
                id="Points"
                label={value.aihealue}
                type="number"
                value={value.Points}
                onChange={(event)=> numberChange(event, index)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="MaxPoints"
                label="maksimipisteet"
                type="number"
                value={value.MaxPoints}
                onChange={(event)=> maxPointChange(event, index)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              </div>)
          })}
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={3} />
          <BarSeries
            valueField="Points"
            argumentField="aihealue"
          />
          <Title text="Testipisteet Aihealueet" />
          <Animation />
        </Chart>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={3} />
          <BarSeries
            valueField="Percentage"
            argumentField="aihealue"
          />
          <Title text="Testi pisteprosentit" />
          <Animation />
        </Chart>
        </Paper></div>)
}
  const setCorrectAnswerstoEnabled = () => {
    setcorrectAnswersEnabled(true);

  
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
                onChange={(e) =>
                  dispatch({
                    type: 'questionChanged',
                    data: { selectedExamNumber: selectedExamNumber, qIndex: qIndex, newQtext: e.target.value }
                  })}
                defaultValue={question.q}></Checkbox>
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
    <div>{correctAnswersEnabled ? feedback() : ""} </div>
  </div>
);
}

export default App;