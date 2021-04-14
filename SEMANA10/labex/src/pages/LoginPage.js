// Para fazermos login como administrador

import React, {useState}  from 'react'
import axios from 'axios'
import {useHistory} from  'react-router-dom'
import {goToTripDetails} from './../components/routes/cordinator'


export const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const login = () =>{
        const body = {
            email:email,
            password:password
        }

        axios
        .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/fayra-cruz/login',body)
        .then((res)=>{
            console.log(res.data)
            window.localStorage.setItem('token',res.data.token)
            history = useHistory({goToTripDetails})
        })
        .catch((err)=>{
            console.log (err)
        })
    }
    return (
        <div>
            <h1>Login</h1>
            <input value={email} onChange={handleEmail} placeholder="E-mail" />
            <input value={password} onChange={handlePassword} placeholder="Senha" />
            <button onClick={login}>Fazer login</button>
        </div>
    )
}

export default LoginPage;