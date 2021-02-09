import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import uuid from 'react-uuid';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import Dropzone from '../Dropzone'
import { changeText, handleCheck, deleteAnswer } from '../AxiosKutsut'

  const UserVastaukset = (props) => {
    let {path, url} = useRouteMatch()
    const host = props.host
    const [answer, setAnswer] = useState([])
    const [questionID, setQuestionID] = useState(0)


      useEffect(() => {
        
          const getAnswer = async () =>{
            try{
          axios
            .get(host + "/vastaukset/" + props.questionID)
            .then(response => {
              console.log("response", response.data)
              setAnswer(response.data)
            })
        }
        catch(exception){
          console.log(exception)
        }
      }
     
        getAnswer()
      },[])

  

      
      if (answer.length < 1)
        return <></>
      return (
        <div className = "Answer-list" >
            <div>
      {answer.map((item) =>
      <div className="user-answer">
        <Checkbox
          key={uuid()}
          //defaultChecked={item.oikea}
          
          onClick={(event) => handleCheck(props.examID, props.questionID, item, event)} >
        </Checkbox>

        

        <TextField 
          key={uuid()}
          label={<FormattedMessage
            id="answer"
            defaultMessage="Vastaus"
            description="Answer"
        ></FormattedMessage>}
          variant="outlined"
          style={{ width:'90%' }}
          inputProps={{ readOnly: true }}
          defaultValue={item.vastausteksti}
          >
        </TextField>
       
    
      </div>
        )}
        
        </div>
        

        
        </div>
      )


  }
  export default UserVastaukset