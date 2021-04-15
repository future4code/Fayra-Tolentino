// Para fazermos login como administrador

import React, {useState}  from 'react'
import axios from 'axios'
import {useHistory} from  'react-router-dom'
import {goToAdminHome, goToTripDetails} from './../components/routes/cordinator'


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
        .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login',body)
        .then((res)=>{
            console.log(res.data)
            window.localStorage.setItem('token',res.data.token)
            // history.push({goToAdminHome}) => errado! Não pode misturar os dois, você tá repetindo oq tá  no coordinator
            // history.push("/admin/trips/list") => primeira forma de fazer e dar certo colocando a rota direito, como já foi
            // feito isso no coordinator você pode só chamar a função goToAdminHome
            goToAdminHome(history)

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