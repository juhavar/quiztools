import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import Vastaukset from './Vastaukset'
import uuid from 'react-uuid';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


const Kysymykset = (props) => {
  let { path, url } = useRouteMatch()
  const [questions, setQuestions] = useState([])
  const [exam, setExam] = useState(0)

  useEffect(() => {
    const getQuestion = async () => {
      console.log("http://localhost:5000/kysymykset/" + props.examID)
      axios
        .get("http://localhost:5000/kysymykset/" + props.examID)
        .then(response => {
          setQuestions(response.data)
        })
    }
    getQuestion()
  }, [props.examID, exam])

  const changeQText = async (examID, questionID, event) => {
    axios
      .put(`http://localhost:5000/muokkaakysymys/${examID}/${questionID}/${event.target.value.toString()}`)
  }

  const addQuestion = async (examID) => {
    axios
      .post(`http://localhost:5000/lisaakysymys/${examID}/'uusi kysymys'`)
  }

  const deleteQuestion = async (questionID) => {
    axios
      .delete(`http://localhost:5000/poistakysymys/${questionID.id}`)
  }

  const addAnswer = async (examID, questionID) => {
    axios
      .post(`http://localhost:5000/lisaavastaus/${examID}/${questionID}/uusi vastaus/false`)
    setExam(examID)
  }

  if (questions.length === 1) {
    return <div>


    </div>
  }
  else
    return (

      <div className="Question-list">
        <Paper style={{ width: '75%' }}>
          <div>
            {setExam[props.e]}
            {questions.map((item, index) =>

              // tekstikentästä poistuminen aiheuttaa verkkoliikennettä vaikkei mitään muuteta
              // kysymyksen poisto puuttuu (DELETE CASCADE?)
              <div className="Question">
                <TextField
                  key={uuid()}
                  label={<FormattedMessage
                    id="question"
                    defaultMessage="Kysymys"
                    description="Question"
                ></FormattedMessage>}
                  style={{ width: '50%' }}
                  variant="outlined"
                  defaultValue={item.teksti}
                  onBlur={(event) => changeQText(props.examID, item.id, event)} ></TextField>
                <DeleteIcon
                  key={uuid()}
                  onClick={(event) => deleteQuestion(item)}>

                </DeleteIcon>
                <Vastaukset key={uuid()} examID={props.examID} questionID={item.id}></Vastaukset>
                <div id={item.index}>
                  <Button key={uuid()} color="primary"
                    onClick={() => addAnswer(props.examID, item.id)}>{<FormattedMessage
                      id="add-answer"
                      defaultMessage="Lisää vastaus"
                      description="Add answer"
                  ></FormattedMessage>}</Button>
                </div>
              </div>
            )}
          </div>

          <div>
            <Button color="primary"
              key={uuid()}
              onClick={() => addQuestion(props.examID)}>{<FormattedMessage
                id="add-question"
                defaultMessage="Lisää kysymys"
                description="Add question"
            ></FormattedMessage>}</Button>
          </div>
        </Paper>
      </div>

    )
}
export default Kysymykset