// Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
import React, {useState}  from 'react'
import axios from 'axios'
import {goBack,goToApplication} from '../components/routes/cordinator'
import { useHistory } from "react-router-dom";

function Application() {
    const [selectTrip, setSelectTrip] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [applicationText, setApplicationText] = useState('')
    const [profession, setProfesion] = useState('')
    const [country, setCountry] = useState('')
    const history = useHistory()
    
    const handleSelectTrip = (e) =>{
        setSelectTrip(e.target.value)
    }
    const handleName = (e) =>{
        setName(e.target.value)
    }
    const handleAge = (e) =>{
        setAge(e.target.value)
    }
    const handleApplicationText = (e) =>{
        setApplicationText(e.target.value)
    }
    const handleProfession = (e) =>{
        setProfesion(e.target.value)
    }
    const handleCoutry = (e) =>{
        setCountry(e.target.value)
    }

    const applicationTrip = (event) =>{
        const body = {
            name: name,
            age: age,
            applicationText: applicationText,
            profession: profession,
            country: country
        }
        axios
        .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login',body)
        .then((res)=>{
            console.log(res.data)
            window.localStorage.setItem('token',res.data.token)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div className="Application">
            <p>Application page</p>
            <form onSubmit ={applicationTrip}>
                <input value ={name} onChange={handleName} placeholder="Name" type ='string' required ></input>
            </form>
            <button onClick={history.goBack}>Voltar</button>
            <button onClick={() => goToApplication(history)}> Inscreva-se</button>
        </div>
    )
}

export default Application;