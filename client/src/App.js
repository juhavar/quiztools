import React, { useEffect, useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';

// import ShowAnswers from './ShowAnswers'
import { Container, Checkbox } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './App.css';
// import Tentit from 'user/Tentit.js'
import Tentit from './Tentit.js'
import Register from './Register.js'
import Login from './Login.js'
import axios from 'axios';

function App() {
  const [dataFromNodeServer, setDataFromNodeServer] = useState([]);
  const [dataFromNodeServerFormatted, setDataFromNodeServerFormatted] = useState(false);
  const [state, dispatch] = useReducer(reducer, []);
  const exams = [];



/*   useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await axios.get("http://localhost:5000/tentit/")
        
        // pyöritellään kyselyt auki pyryn mallilla (tm)
        if (result.data.length > 0) {
          for (var i = 0; i<result.data.length; i++){
            result.data[i].exam = []
            console.log("result.data[i].id: " + result.data[i].id)
            let questions = await axios.get("http://localhost:5000/kysymykset/" + result.data[i].id.toString())
            result.data[i].exam = questions.data
            console.log("result.data[i].exam ", result.data[i].exam )
            console.log("questions.data", questions.data)
            console.log("i",i)
            console.log("result.data[i].exam.length ",result.data[i].exam.length )
            if (result.data[i].exam.length > 0){
              for (var j=0; i<result.data[i].exam.length-1; j++){
                console.log("j",j)
                result.data[i].exam[j].answers = []
                console.log("result.data[i].exam[j].answers ",result.data[i].exam[j].answers )
                console.log("result.data[i].exam[j]" , result.data[i].exam[j])
                console.log("result.data[i].exam[j].id", result.data[i].exam[j].id)
                console.log("i",i)
                console.log("nimi", result.data[i].exam[j].teksti)
                console.log("kysymyksen id", result.data[i].exam[j].id)
                let answers = await axios.get("http://localhost:5000/vastaukset/" + result.data[i].exam[j].id)
                console.log(result.data[i].exam[j].answers = answers.data)
                result.data[i].exam[j].answers = answers.data
                console.log("answers", result.data[i].exam[j].answers)
                console.log("answers.data", answers.data)
              }
            }
            console.log(result.data)
            setDataFromNodeServer(result.data[0].nimi)
            setDataFromNodeServerFormatted(true);
          }

          dispatch({ type: "INIT_DATA", data: result.data })
          console.log("pyörittelyn jälkeen: ", result.data)
        } else {
          throw console.log("Dataa ei saatu palvelimelta.")
          }
        }
        catch (exception) {
          console.log("virhe:",exception)
        }

      }
      fetchData()
    }, [])
 */


/*     useEffect(() => {
      const updateData = async () => {
        try {
          let result = await axios.get("http://localhost:5000/tentit/")
          
          // pyöritellään kyselyt auki
          if (result.data.length > 0) {
            for (var i = 0; i<result.data.length; i++){
              result.data[i].exam = []
              console.log(result.data[i].id)
              let questions = await axios.get("http://localhost:5000/kysymykset/" + result.data[i].id.toString())
              result.data[i].exam = questions.data
  
              if (result.data[i].exam.length > 0){
                for (var j=0; i<result.data[i].exam.length; j++){
                  result.data[i].exam[j].answers = []
                  console.log(result.data[i].exam[j])
                  console.log(result.data[i].exam[j].id)
                  let answers = await axios.get("http://localhost:5000/vastaukset/" + result.data[i].exam[j].id.toString())
                  
                  result.data[i].exam[j].answers = answers.data
                }
              }
              console.log(result.data)
              setDataFromNodeServer(result.data)
              setDataFromNodeServerFormatted(true);
              
            }
            dispatch({ type: "INIT_DATA", data: result.data })
            console.log("pyörittelyn jälkeen: ", result.data)
          } else {
            throw console.log("Dataa ei saatu palvelimelta.")
            }
          }
          catch (exception) {
            console.log(exception)
          }
  
        }
        
      }, [state]) */

function reducer(state, action) {
  switch (action.type) {
    case 'INIT_DATA':
      return action.data;
    default:
      throw new Error();
  }

}

return (
  <div className="App">
    
    
      <Router>
        <div>
          <nav>
            
              
                <Button component={Link} to="/" >Home</Button>
                <Button component={Link} to='/tentit'>Tentit</Button>
                <Button component={Link} to='/login' >Kirjaudu</Button>
                <Button component={Link} to='/register'>Rekisteröidy</Button>
              
            
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
          <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/tentit">
              <Tentit />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    

   

  </div>

    


  
);
}
function Home() {
  return null;
}



function Users() {
  return <h2>Users</h2>;
}
export default App;