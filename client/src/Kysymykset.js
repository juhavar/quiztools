import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import Vastaukset from './Vastaukset'
import uuid from 'react-uuid';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { addQuestion, changeQText, deleteQuestion, addAnswer, deleteExam } from './AxiosKutsut'


const Kysymykset = (props) => {
  let { path, url } = useRouteMatch()
  const host = props.host
  //const token = localStorage.token
  const [questions, setQuestions] = useState([])
  const [exam, setExam] = useState(0)
  const [questionID, setQuestionID] = useState(null)
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertText, setAlertText] = useState("")
  const adminMode = window.localStorage.admin // 

  useEffect(() => {
    const getQuestion = async () => {
      console.log("props.host", props.host, "props.examID", props.examID)
      axios
        .get(host + "/kysymykset/" + props.examID)
        .then(response => {
          setQuestions(response.data)
        })
    }
    getQuestion()
  }, [props.examID, exam, setExam, setQuestions])

  /*   const qClickHandler = (event) => {
      console.log(questionText, event.target.value.toString())
      setQuestionText(event.target.value.toString())
    } */

  const deletionHandler = (item_type, item_id) => {

    switch (item_type) {
      case 'exam': {
        setAlertText('delete-exam')
        //deleteExam(item_id)
        break;
      }
      case 'question': {
        setAlertText('delete-question')
        setQuestionID(item_id)
        break;

      }

      default:
        throw new Error()
    }
    setAlertOpen(true)
  }

  const handleClose = () => {
    setAlertOpen(false)
  }

  const confirmDelete = () => {
    switch (alertText) {
      case 'delete-exam': {
        deleteExam(props.examID)
        break;
      }
      case 'delete-question': {
        deleteQuestion(questionID)
        break;
      }
      default: {
        throw new Error()
      }
    }

    setAlertOpen(false)
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
        <Paper style={{ width: '95%', maxHeight: '95%', overflow: 'auto' }}>
          <div>

            {setExam[props.e]}

            {questions.map((item, index) =>



              // tekstikentästä poistuminen aiheuttaa verkkoliikennettä vaikkei mitään muuteta

              <div className="Question">
                <TextField
                  key={uuid()}
                  label={<FormattedMessage
                    id="question"
                    defaultMessage="Kysymys"
                    description="Question"
                  ></FormattedMessage>}
                  style={{ width: '90%' }}
                  variant="outlined"
                  defaultValue={item.teksti}
                  inputProps={{ readOnly: !adminMode }}
                  /*  onClick={(event) => qClickHandler(event)} */
                  onBlur={(event) => changeQText(props.examID, item.id, event)} ></TextField>
                <DeleteIcon
                  key={uuid()}
                  onClick={(event) => deletionHandler('question', item)}>

                </DeleteIcon>
                <Vastaukset host={host} key={uuid()} examID={props.examID} questionID={item.id} userMode={adminMode}></Vastaukset>
                <div id={item.index}>
                  {!adminMode ? "" : <Button key={uuid()} color="primary"
                    onClick={() => addAnswer(props.examID, item.id)}>{<FormattedMessage
                      id="add-answer"
                      defaultMessage="Lisää vastaus"
                      description="Add answer"
                    ></FormattedMessage>}</Button>

                  }
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
          <div>
            <Button color="primary"
              key={uuid()}
              onClick={(event) => deletionHandler('exam', props.examID)}>{<FormattedMessage
                id="delete-exam"
                defaultMessage="Poista tentti"
                description="Delete exam"
              ></FormattedMessage>}</Button>

            <Dialog
              open={alertOpen}
              close={handleClose}
            >

              <DialogTitle id="alert-dialog-title">
                {<FormattedMessage
                  id={alertText}

                ></FormattedMessage>}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {<FormattedMessage
                    id="delete-warning"
                    defaultMessage="Huomio! Toiminto on peruuttamaton!"
                    description="Confirm and delete exam"
                  ></FormattedMessage>}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={confirmDelete} color="primary">{<FormattedMessage
                  id="alert-confirm"
                  defaultMessage="Poista tentti"
                  description="Confirm and delete exam"
                ></FormattedMessage>}

                </Button>
                <Button onClick={handleClose} color="primary" autoFocus >{<FormattedMessage
                  id="alert-cancel"
                  defaultMessage="Peruuta"
                  description="Cancel deletion"
                ></FormattedMessage>}

                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Paper>
      </div>

    )
}
export default Kysymykset