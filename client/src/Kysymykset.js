import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Vastaukset from './Vastaukset'
import uuid from 'react-uuid';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";


  const Kysymykset = (props) => {
    let {path, url} = useRouteMatch()
    const [questions, setQuestions] = useState([])
    const [exam, setExam] = useState(0)

    useEffect(() => {
        const getQuestion = async () =>{
          console.log("http://localhost:5000/kysymykset/" + props.examID)
          axios
            .get("http://localhost:5000/kysymykset/" + props.examID)
            .then(response => {
              setQuestions(response.data)
            })
        }
        getQuestion()
      },[props.examID, exam])

      const changeQText = async (examID, questionID, event) => {
        axios
          .put(`http://localhost:5000/muokkaakysymys/${examID}/${questionID}/${event.target.value.toString()}`)
      }

      const addQuestion = async (examID) => {
        axios
          .post(`http://localhost:5000/lisaakysymys/${examID}/'uusi kysymys'`)
      }

      const addAnswer = async (examID, questionID) => {
        axios
          .post(`http://localhost:5000/lisaavastaus/${examID}/${questionID}/uusi vastaus/false`)
          setExam(examID)
      }
      
      if (questions.length === 1){
        return         <div>
        
        
      </div>}
      else 
      return (
        
        <div className = "Question-list">
          <Paper style={{width:'75%'}}> 
            <div>
            {setExam[props.e]}
      {questions.map((item, index) =>
       // kysymyksen teksti ei päivity ruudulle ilman tentin uudelleenlatausta!
       // tekstikentästä poistuminen aiheuttaa verkkoliikennettä vaikkei mitään muuteta
       // kysymyksen poistu puuttuu
      <div className="Question">
        <TextField 
          key={uuid()}
          label="kysymys"
          style={{width:'50%'}}
          variant="outlined"
          defaultValue={item.teksti}
          onBlur={(event) => changeQText(props.examID, item.id, event)} ></TextField>
        <Vastaukset key={uuid()} examID={props.examID} questionID={item.id}></Vastaukset>
        <div id={item.index}>
            <Button key={uuid()} color="primary"
                    onClick={() => addAnswer(props.examID, item.id)}>Lisää vastaus</Button>
        </div>
      </div>
        )}
        </div>
        
        <div>
            <Button color="primary"
                    key={uuid()}
                    onClick={() => addQuestion(props.examID)}>Lisää kysymys</Button>
        </div>
        </Paper>
        </div>
        
      )
  }
  export default Kysymykset