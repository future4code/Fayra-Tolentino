import axios from 'axios'
import {BASE_URL} from '../constants/urls'
import {goToFeed} from '../routes/coordinator'

export const create = (body,clear,history) =>{
    axios
    .post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token"),
        },
    })
    .then((res)=>{
        clear()
        console.log(res.data)
        // Estava sobreescrevendo o token
        // localStorage.setItem('token',res.data.token)
        // console.log(res)
        alert("Post Criado com sucesso!")
        goToFeed(history)
    })
    .catch((err)=>{
        console.log(err)
        alert(err.response.data.message)
        goToFeed(history)
    })
}