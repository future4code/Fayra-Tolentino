// Para fazermos login como administrador

import React, {useState}  from 'react'
import axios from 'axios'
import {useHistory} from  'react-router-dom'
import {goToAdminHome} from './../components/routes/cordinator'
import {baseUrl} from '../components/Parameters'
import Header from '../components/Header'
import styled from 'styled-components'

const LoginContainer = styled.div `
    display:flex;
    /* width:100px; */
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top:12vh;
`
const Title = styled.h1 `
    color:#250340;
    font-size:3.2rem;
`
const InputLogin = styled.div `
    display:flex;
    width:400px;
    /* flex-direction:column; */
`
const InputStyle = styled.input `
    width:400px;
    height: 28px;
    color:#922fa1;
    font-weight:bold;
    border-radius:100px;
    border: 1px solid rgb(146,47,161);
    margin-top:12px;
    outline:none;
    padding-left:10px;
`
const ButtonStyled = styled.button `
    height:40px;
    width:200px;
    border-radius:100px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:16px;
    margin-left:110px;
    margin-top:30px;
    font-weight:600;
    letter-spacing:normal;
    text-align:center;
    text-decoration: none;
    border: 1px solid rgb(146,47,161);
    position: relative;
    overflow: hidden;
    color:white;
    background-color:#922fa1;
    &:hover {
        box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
    }
    &:before {
        background: linear-gradient(120deg,transparent,rgba(146, 148, 248, 0.4),transparent);
        transition: all 650ms;
    }
    &:hover:before {
        left: 100%;
    }
`

// --------------------------------------------------------------------------------------------------------------------------------------------------------

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
        <LoginContainer>
            <Header/>
            <Title>Login</Title>
            {/* não pode esqueccer do onSubmit do form e na função por event.preventDefault(), para funcionar */}
            <InputLogin>
                <form onSubmit ={login}>
                    <InputStyle value={email} onChange={handleEmail} placeholder="E-mail" type ='email' pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"} required />
                    <InputStyle value={password} onChange={handlePassword} placeholder="Senha"  type ='password' required />
                    <ButtonStyled>Fazer login</ButtonStyled>
                </form>
            </InputLogin>
        </LoginContainer>
    )
}

export default LoginPage;