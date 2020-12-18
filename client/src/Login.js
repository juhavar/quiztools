import React, { useState } from 'react'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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
            
            console.log(response)
            
        } catch (e) {
            console.log("registration error")
        }
    }


    return (
        <div className="Login">
            <div>
                <TextField name="email" label="Sähköpostiosoite"
                    onChange={(e) => { onChange(e) }}></TextField></div><p></p>
            <div>
                <TextField name="salasana" label="Salasana" type="password"
                    onChange={(e) => { onChange(e) }}></TextField></div><p></p>

            <div><Button onClick={onSubmit}>Kirjaudu sisään</Button></div>
            
            </div>

    )
}
export default Login