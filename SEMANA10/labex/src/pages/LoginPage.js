// Para fazermos login como administrador

import React, {useState}  from 'react'
import axios from 'axios'
import {useHistory} from  'react-router-dom'
import {goToAdminHome} from './../components/routes/cordinator'
import {baseUrl} from '../components/Parameters'

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
    const login = (event) =>{
        event.preventDefault()
        const body = {
            email:email,
            password:password
        }

        axios
        .post(`${baseUrl}login`,body)
        .then((res)=>{
            console.log(res.data)
            window.localStorage.setItem('token', res.data.token)
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
            {/* não pode esqueccer do onSubmit do form e na função por event.preventDefault(), para funcionar */}
            <form onSubmit ={login}>
                <input value={email} onChange={handleEmail} placeholder="E-mail" type ='email' pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"} required />
                <input value={password} onChange={handlePassword} placeholder="Senha"  type ='password' required />
                <button>Fazer login</button>
            </form>
        </div>
    )
}

export default LoginPage;