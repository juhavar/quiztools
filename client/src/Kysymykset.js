import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Vastaukset from './Vastaukset'
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
    const [questionID, setQuestionID] = useState(0)

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
      },[url])

      const questionIDsetter= (id) => {
        setQuestions(id)
      }
      
      if (questions.length < 1)
        return <>loading...</>
      return (
        <div className = "Question list">
            <div>
      {questions.map((item, index) =>
      <div>
        <input value={item.teksti} ></input>
        <Vastaukset questionID={item.id}></Vastaukset>
      </div>
        )}
        </div>
        

        <div>
            <Button color="primary">Lisää vastaus</Button>
        </div>
        </div>
      )
  }
  export default Kysymykset