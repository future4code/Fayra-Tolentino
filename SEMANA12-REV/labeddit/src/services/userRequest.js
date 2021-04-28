import axios from 'axios'
import {BASE_URL} from '../constants/urls'
import {goToFeed, goToLogin} from '../routes/coordinator'

export const login = (body,clear,history) =>{
    axios
    .post(`${BASE_URL}/login`, body)
    .then((res)=>{
        console.log(res)
        localStorage.setItem('token',res.data.token)
        clear()
        goToFeed(history)
    })
    .catch((err)=>{
        console.log(err)
        alert('Erro no login')
    })
}

export const signUp = (body,clear,history) =>{
    axios
    .post(`${BASE_URL}/signup`, body)
    .then((res)=>{
        console.log(res)
        localStorage.setItem('token',res.data.token)
        clear()
        goToLogin(history)
    })
    .catch((err)=>{
        console.log(err)
        alert('Erro no cadastro')
    })
}

