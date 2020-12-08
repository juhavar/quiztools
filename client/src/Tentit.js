import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Kysymykset from './Kysymykset'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

  const Exam = () => {
    let {path, url} = useRouteMatch()
    const [exam, setExam] = useState([])
    const [examID, setExamID] = useState()

    useEffect(() => {
        const getExam = async () =>{
          axios
            .get("http://localhost:5000/tentit")
            .then(response => {
              setExam(response.data)
            })
        }
        getExam()
      }, [])

      if (exam.length < 1)
        return <>loading...</>
      return (
        <div className = "Exam list">
            <div>
      {exam.map((item, index) =>
    
        <Button component={Link} to={`${url}/${item.id}`} key={index} color="primary"
        onClick={() => setExamID(item.id)} >
                {item.nimi}</Button>
        )}
        </div>
        
        <Switch>
            <Route exact path = {path}>
            </Route>
            <Route path={`${path}/:id`}>
            <Kysymykset examID={examID}></Kysymykset>
            </Route>
        </Switch>
        <div>
            <Button color="primary">Lisää kysymys</Button>
        </div>
        </div>
      )
  }
  export default Exam