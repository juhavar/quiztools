import React, { useState } from 'react'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Register = () => {
    const [userData, setUserData] = useState({
        etunimi: '',
        sukunimi: '',
        email: '',
        salasana: '',
        admin: ''
    })

    const onChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault()

        try {

            await
                axios
                    .post(`http://localhost:5000/register/${userData.etunimi}/${userData.sukunimi}/${userData.email}/${userData.salasana}/${userData.admin}`)

        } catch (e) {
            console.log("registration error")
        }
    }
    return (
        <div>
            <div className="Register">
                <form onSubmit={onSubmit}>
                    <div>
                        <TextField name="etunimi" label="Etunimi"
                            onChange={(e) => { onChange(e) }}></TextField></div><p></p>
                    <div>
                        <TextField name="sukunimi" label="Sukunimi"
                            onChange={(e) => { onChange(e) }}></TextField></div><p></p>
                    <div>
                        <TextField name="email" label="Sähköpostiosoite"
                            onChange={(e) => { onChange(e) }}></TextField></div><p></p>
                    <div>
                        <TextField name="salasana" label="Salasana" type="password"
                            onChange={(e) => { onChange(e) }}></TextField></div><p></p>
                    <div><TextField name="admin" label="Opettaja"
                        onChange={(e) => { onChange(e) }}></TextField></div><p></p>

                    <Button onClick={onSubmit}>Rekisteröidy</Button>
                </form>

            </div>


        </div>
    )
}
export default Register