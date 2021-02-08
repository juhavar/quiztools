import React, { useState, useEffect } from 'react'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { login } from './AxiosKutsut';

const Login = (props) => {

    const [token, setToken] = useState(null);
    const [userLogin, setUserLogin] = useState(false)

    //setUserLogin(props.userLoggedIn)

    const [userData, setUserData] = useState({
        email: '',
        salasana: '',
    })
    const history = useHistory();

    const onChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        
        try {
            e.preventDefault()

            let response = await login(userData)

            // siirretty
            /* await
                axios
                    .post(props.host + `/login/`, userData)
             */
            console.log(response)
            let token = await response
            localStorage.setItem('token', response.token)
            localStorage.setItem('admin', response.admin)
            history.push('/')
            //setUserLogin(true)
            
            window.location.reload()
            
        } catch (e) {
            console.log("registration error")
        }
    }

    const testaaToken = async () => {
       
        try {
            //e.preventDefault()

            const response =
            await
                axios
                    .get(props.host + `/tokentestaus/`, {headers: {token: localStorage.token}})
            
            console.log(response)
            
        } catch (e) {
            console.log("ei toimi")
        }
    }


    return (
        <div className="Login">
            <div>
                <TextField name="email" label={<FormattedMessage
                            id="email"
                            defaultMessage="Sähköpostiosoite"
                            description="email address"
                        ></FormattedMessage>}
                    onChange={(e) => { onChange(e) }}></TextField></div><p></p>
            <div>
                <TextField name="salasana" label={<FormattedMessage
                            id="password"
                            defaultMessage="Salasana"
                            description="Password"
                        ></FormattedMessage>} type="password"
                    onChange={(e) => { onChange(e) }}></TextField></div><p></p>

            <div><Button onClick={onSubmit}>{<FormattedMessage
                            id="login.button"
                            defaultMessage="Kirjaudu sisään"
                            description="Login button"
                        ></FormattedMessage>}</Button></div>

            {/* <div><Button onClick={testaaToken}>Tokenin testaus</Button></div>
            
            {localStorage.token}  */}
            
            </div>

    )
}
export default Login