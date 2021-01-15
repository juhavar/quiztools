import React, { useState } from 'react'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

const Login = () => {

    const [userData, setUserData] = useState({
        email: '',
        salasana: '',
    })

    const onChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        
        try {
            e.preventDefault()

            const response =
            await
                axios
                    .post(`http://localhost:5000/login/`,userData)
            
            console.log(response.data)
            const token = await response.data.token
            localStorage.setItem('token', token)
            
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
                    .get(`http://localhost:5000/tokentestaus/`, {headers: {token: localStorage.token}})
            
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