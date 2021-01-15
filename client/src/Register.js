import React, { useState } from 'react'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

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
                        <TextField name="etunimi" label={<FormattedMessage
                            id="firstName"
                            defaultMessage="Etunimi"
                            description="First name"
                        ></FormattedMessage>}
                            onChange={(e) => { onChange(e) }}></TextField></div><p></p>
                    <div>
                        <TextField name="sukunimi" label={<FormattedMessage
                            id="surName"
                            defaultMessage="Sukunimi"
                            description="Last name"
                        ></FormattedMessage>}
                            onChange={(e) => { onChange(e) }}></TextField></div><p></p>
                    <div>
                        <TextField name="email" label={<FormattedMessage
                            id="email"
                            defaultMessage="Sähköpostiosoite"
                            description="Email"
                        ></FormattedMessage>}
                            onChange={(e) => { onChange(e) }}></TextField></div><p></p>
                    <div>
                        <TextField name="salasana" label={<FormattedMessage
                            id="password"
                            defaultMessage="Salasana"
                            description="Password"
                        ></FormattedMessage>} type="password"
                            onChange={(e) => { onChange(e) }}></TextField></div><p></p>
                    <div><TextField name="admin" label={<FormattedMessage
                            id="admin"
                            defaultMessage="Opettaja"
                            description="Teacher password"
                        ></FormattedMessage>}
                        onChange={(e) => { onChange(e) }}></TextField></div><p></p>

                    <Button onClick={onSubmit}>
                        <FormattedMessage
                            id="register.button"
                            defaultMessage="Rekisteröidy"
                            description="Register/register button"
                        ></FormattedMessage>
                    </Button>
                </form>

            </div>


        </div>
    )
}
export default Register