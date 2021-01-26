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
  const host = props.host
  const [questions, setQuestions] = useState([])
  const [exam, setExam] = useState(0)
  const [questionText, setQuestionText] = useState("")

  useEffect(() => {
    const getQuestion = async () => {
      //console.log("http://localhost:5000/kysymykset/" + props.examID)
      axios
        .get(host + "/kysymykset/" + props.examID)
        .then(response => {
          setQuestions(response.data)
        })
    }
    getQuestion()
  }, [props.examID, exam])

/*   const qClickHandler = (event) => {
    console.log(questionText, event.target.value.toString())
    setQuestionText(event.target.value.toString())
  } */

  const changeQText = async (examID, questionID, event) => {
/*     if (questionText !== event.target.value.toString())
    { */
      axios
      .put(host + `/muokkaakysymys/${examID}/${questionID}/${event.target.value.toString()}`)
    /* }
      else return */
  }

  const addQuestion = async (examID) => {
    axios
      .post(host + `/lisaakysymys/${examID}/' '`)
  }

  const deleteQuestion = async (questionID) => {
    axios
      .delete(host + `/poistakysymys/${questionID.id}`)
  }

  const addAnswer = async (examID, questionID) => {
    axios
      .post(host + `/lisaavastaus/${examID}/${questionID}/' '/false`)
    setExam(examID)
  }

  if (questions.length < 1) {
    return <div>
      <div>
        <Button color="primary"
          key={uuid()}
          onClick={() => addQuestion(props.examID)}>{<FormattedMessage
            id="add-question"
            defaultMessage="Lisää kysymys"
            description="Add question"
          ></FormattedMessage>}</Button>
      </div>

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
                 /*  onClick={(event) => qClickHandler(event)} */
                  onBlur={(event) => changeQText(props.examID, item.id, event)} ></TextField>
                <DeleteIcon
                  key={uuid()}
                  onClick={(event) => deleteQuestion(item)}>

                </DeleteIcon>
                <Vastaukset host={host} key={uuid()} examID={props.examID} questionID={item.id}></Vastaukset>
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