import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import uuid from 'react-uuid';

import axios from 'axios';
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
    const [answer, setAnswer] = useState([])
    const [questionID, setQuestionID] = useState(0)


      useEffect(() => {
        const getAnswer = async () =>{

          axios
            .get("http://localhost:5000/vastaukset/" + props.questionID)
            .then(response => {
              console.log("response", response.data)
              setAnswer(response.data)
            })
        }
        getAnswer()
      },[])

      const changeText = async (examID, questionID, item, event) => {
        //setQuestionID(props.questionID)
        axios
          .put(`http://localhost:5000/muokkaavastaus/${examID}/${questionID}/${item.id}/${event.target.value}/${item.oikea}/`)
      }

      const handleCheck = async (examID, questionID, item, event) =>{
        console.log("handle check")
        axios
          .put(`http://localhost:5000/muokkaavastaus/${examID}/${questionID}/${item.id}/${item.vastausteksti}/${event.target.checked}/`)
      }

      const deleteAnswer = async (item) =>{
        axios
          .delete(`http://localhost:5000/poistavastaus/${item.id}`)
      }


      // tekstin muuttaminen toimii, checkbox puuttuu
      if (answer.length < 1)
        return <></>
      return (
        <div className = "Answer-list" >
            <div>
      {answer.map((item) =>
      <div className="answer">
        <Checkbox
          key={uuid()}
          defaultChecked={item.oikea}
          
          onClick={(event) => handleCheck(props.examID, props.questionID, item, event)} 
>
        </Checkbox>
        <TextField 
          key={uuid()}
          label="vastaus"
          variant="outlined"
          style={{width:'45%'}}
          defaultValue={item.vastausteksti}
          onBlur={(event) => changeText(props.examID, props.questionID, item, event)}>
        </TextField>
        <DeleteIcon
          key={uuid()}
          onClick={(event) => deleteAnswer(item)}>

        </DeleteIcon>
      </div>
        )}
        
        </div>
        

        
        </div>
      )


  }
  export default Kysymykset