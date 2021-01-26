import React, { useEffect, useReducer, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import { Context } from "./components/Wrapper";

// import ShowAnswers from './ShowAnswers'
import { Container, Checkbox } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import './App.css';
// import Tentit from 'user/Tentit.js'
import Tentit from './Tentit.js'
import Register from './Register.js'
import Login from './Login.js'
import { FormattedMessage, FormattedDate } from 'react-intl';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { w3cwebsocket as W3CWebSocket } from "websocket";


  


function App(props) {

  var host = null
  switch (process.env.NODE_ENV) {
  case 'production':
      host = 'https://jv-quiztool.herokuapp.com'
      break
    case 'development':
      host = 'http://localhost:5000'
      break
    case 'test':
      host = 'localhost'
      break
    default:
      throw "Environment not properly set!"
      break
}

  const context = useContext(Context);
  const [dataFromNodeServer, setDataFromNodeServer] = useState([]);
  const [dataFromNodeServerFormatted, setDataFromNodeServerFormatted] = useState(false);
  const [state, dispatch] = useReducer(reducer, []);
  const exams = [];
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const client = new W3CWebSocket(`ws://${host}:3001`)



  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
useEffect(() => {
  client.onopen = (e) => {
    console.log("WebSocket connection open.")
  }
  client.onmessage = (e) => {
    console.log("client.onmessage ", e.data)
    setAlertMessage(e.data)
    setAlertOpen(true)
    
   
  }
},[client.onChange])

function showAlert(e) {
    
 
}

  


  function reducer(state, action) {
    switch (action.type) {
      case 'INIT_DATA':
        return action.data;
      default:
        throw new Error();
    }

  }

  function handleClose(event, reason){
/*     if (reason === 'clickaway') {
      return;
    } */

    setAlertOpen(false);
  }

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  return (
    <div className="App">


      <Router >
        <div>
          <nav>


            <Button component={Link} to="/" ><HomeIcon color="action"></HomeIcon></Button>
            <Button component={Link} to='/tentit'>
              <FormattedMessage
                id="tentit.button"
                defaultMessage="Tentit"
                description="Navigation/exams button"
              ></FormattedMessage></Button>
            <Button component={Link} to='/login' ><FormattedMessage
              id="login.button"
              defaultMessage="Kirjaudu"
              description="Navigation/login button"
            ></FormattedMessage></Button>
            <Button component={Link} to='/register'><FormattedMessage
              id="register.button"
              defaultMessage="Rekisteröidy"
              description="Navigation/register button"
            ></FormattedMessage></Button>
            
            <select className="language-selector" value={context.locale} onChange={context.selectLanguage}>
              <option value='en-gb'>English</option>
              <option value='fi'>suomi</option>
              <option value='vi'>Tiếng Việt</option>
            </select>
            <text className="date-time"><FormattedDate
              
              value = {props.date}
              year = 'numeric'
              month = 'numeric'
              day = 'numeric'
              weekday = 'long'
              ></FormattedDate></text>
            
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
              <Tentit host={host}  />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

      <div>
      {console.log("Renderöinnin viesti:", alertMessage)}
    <Snackbar open={alertOpen} onClose={handleClose} autoHideDuration={3000} anchorOrigin={{
         vertical: 'bottom',
         horizontal: 'left',
       }} > 
     <Alert severity="info"><FormattedMessage
     
              id={alertMessage.toString()}
              
              description="Translations for alert messages"
            ></FormattedMessage></Alert>
    </Snackbar> </div> 


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




// pyryn malli (ei käytössä)

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