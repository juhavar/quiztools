import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import uuid from 'react-uuid';
import axios from 'axios';
import Kysymykset from './Kysymykset'
import { FormattedMessage, FormattedDate } from 'react-intl';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

  const Exam = (props) => {
    let {path, url} = useRouteMatch()
    const host = props.host
    const [exam, setExam] = useState([])
    const [examID, setExamID] = useState()
    const [newExamDialogOpen, setNewExamDialogOpen] = useState(false)
    const [examName, setExamName] = useState("")
    const token = localStorage.token
    const admin = localStorage.admin
    useEffect(() => {
     
        const getExam = async () =>{
          console.log(props)
          axios
            .get(host + "/tentit", {headers: {token:token}, admin:admin})
            .then(response => {
              setExam(response.data)
            })
        }
        getExam()
      }, [])

      const onClick = () => {
        setNewExamDialogOpen(true)
      }

      const handleClose = () => {
        setNewExamDialogOpen(false)
        if(examName)
          addExam(examName)
      }
      const addExam = async () => {
        axios
        .post(`http://localhost:5000/kayttajat`)  
        //.post(`http://localhost:5000/lisaatentti/${examName}`)
      }


      if (exam.length < 1)
        return <>loading...</>
      return (
        
        <div className = "Exam-list">
            <div>
      {exam.map((item, index) =>
    
        <Button component={Link} to={`${url}/${item.id}`} key={uuid()} color="primary"
        onClick={() => setExamID(item.id)} >
                {item.nimi}</Button>
        )}



        <Button color="primary"
                onClick={onClick}
                >
                  +
                  </Button>
                  
                  <NewExamDialog examName={examName} open={newExamDialogOpen} onClose={handleClose}></NewExamDialog>
        
        </div>
        
        <Switch>
            <Route exact path = {path}>
            </Route>
            <Route path={`${path}/:id`}>
            <Kysymykset examID={examID} host={host}></Kysymykset>
            </Route>
        </Switch>


        
        </div>
      )
  }
  export default Exam

  function NewExamDialog(props){
    const {open, onClose, examName} = props

    const handleClose = () => {
      onClose(examName)
    }

    return (
      <Dialog onClose={handleClose()} open={open}>
      <DialogTitle id="newExamDialog">
      <FormattedMessage
 
        id="new-exam-title"
        description="Translation for new exam input"
></FormattedMessage>
      </DialogTitle>
      <TextField key={uuid()}
       
      >teksti</TextField>
      <Button >
          Uus tentti
      </Button>
      <Button>Peruuta</Button>
    </Dialog>
    )
  }