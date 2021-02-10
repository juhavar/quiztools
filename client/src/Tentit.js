import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import uuid from 'react-uuid';
import axios from 'axios';
import Kysymykset from './Kysymykset'
import UserKysymykset from './user/UserKysymykset'
import { FormattedMessage, FormattedDate } from 'react-intl';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import TextField from '@material-ui/core/TextField';
import { addExam, changeExamName, deleteExam } from './AxiosKutsut';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const Exam = (props) => {
  let { path, url } = useRouteMatch()
  const host = props.host
  const [exam, setExam] = useState([])
  const [examID, setExamID] = useState()

  const [examName, setExamName] = useState("")
  const token = window.localStorage.token
  const admin = window.localStorage.admin

  useEffect(() => {

    const getExam = async () => {
      console.log(props)
      axios
        .get(host + "/tentit", { headers: { token: token }, admin: admin })
        .then(response => {
          setExam(response.data)
        })
    }
    getExam()
  }, [examID])



  /*   const userMode = () => {
     if (window.localStorage.admin === ("true" || true)) {
  
        return <Kysymykset examID={examID} host={host}></Kysymykset>
     }
      else{
        
         return <UserKysymykset examID={examID} host={host}></UserKysymykset>
      }
      
    }  */

    const newExamClick = () => {
      var defaultExamName = "tentti"
    
      addExam(defaultExamName + examID)
    }

  if (exam.length < 1)
    return <>loading...</>
  return (

    <div className="Exam-list">

      <div>
        {exam.map((item, index) =>

          <Button component={Link} to={`${url}/${item.id}`} key={uuid()} color="primary"
            onClick={() => setExamID(item.id)} >
            {item.nimi}</Button>
        )}


        {window.localStorage.admin === "true" ?
          <Button color="primary"
            onClick={newExamClick}
          >
            +
                  </Button>
          : null}


        
      </div>

      <Switch>
        <Route exact path={path}>
        </Route>
        <Route path={`${path}/:id`} >
          {window.localStorage.admin === ("true" || true) ?

            <Kysymykset examID={examID} host={host}></Kysymykset>

            :

            <UserKysymykset examID={examID} host={host}></UserKysymykset>
          }

        </Route>
      </Switch>



    </div>
  )
}
export default Exam