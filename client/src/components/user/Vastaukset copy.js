import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
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
            console.log("url", url)
            console.log("path", path)
          console.log("qID", props.questionID)
          console.log("http://localhost:5000/vastaukset/")
          axios
            .get("http://localhost:5000/vastaukset/" + props.questionID)
            .then(response => {
              console.log("response", response.data)
              setAnswer(response.data)
            })
        }
        getAnswer()
      },[])


      if (answer.length < 1)
        return <>loading...</>
      return (
        <div className = "Answer-list" >
            <div>
      {answer.map((item) =>
        <input value={item.vastausteksti} ></input>
        
      
        )}
        </div>
        

        
        </div>
      )
  }
  export default Kysymykset