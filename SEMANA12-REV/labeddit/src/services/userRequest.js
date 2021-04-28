import axios from 'axios'
import {BASE_URL} from '../constants/urls'

export const login = (body,clear) =>{
    axios
    .post(`${BASE_URL}/login`, body)
    .then((res)=>{
        console.log(res)
        localStorage.setItem('token',res.data.token)
        clear()
    })
    .catch((err)=>{
        console.log(err)
        alert('Erro no login')
    })
}
