import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import UserVastaukset from './UserVastaukset'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const UserKysymykset = (props) => {
  let { path, url } = useRouteMatch()
  const [questions, setQuestions] = useState([])
  const [questionID, setQuestionID] = useState(0)

  useEffect(() => {
    const getQuestion = async () => {

      axios
        .get(props.host + "/kysymykset/" + props.examID)
        .then(response => {
          setQuestions(response.data)
        })
    }
    getQuestion()
  }, [url])

  const questionIDsetter = (id) => {
    setQuestions(id)
  }

  if (questions.length < 1)
    return <>loading...</>
  return (
    <div className="Question list">


      <div>
        {questions.map((item, index) =>
          <div>
            <TextField
              label={<FormattedMessage
                id="question"
                defaultMessage="Kysymys"
                description="Question"
            ></FormattedMessage>}
              variant="outlined"
              value={item.teksti}
              style={{ width: '91%' }}
              inputProps={{ readOnly: true }} ></TextField>
            <UserVastaukset questionID={item.id} host={props.host}></UserVastaukset>

          </div>
        )}
      </div>

      <div>
        <Button color="primary">Näytä vastaukset</Button>
      </div>

    </div>
  )
}
export default UserKysymykset