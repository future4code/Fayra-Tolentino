// Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
import React, {useState,useEffect}  from 'react'
import axios from 'axios'
import {goToLastPage,goToApplication} from '../components/routes/cordinator'
import { useHistory,useParams } from "react-router-dom";
import CountrySelector from '../components/buttons/CountrySelector';
import {baseUrl} from '../components/Parameters'

function Application() {
    const [tripList, setTripList] = useState([])
    const [selectTrip, setSelectTrip] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [applicationText, setApplicationText] = useState('')
    const [profession, setProfesion] = useState('')
    const [country, setCountry] = useState('')
    const params = useParams()
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
    const handleCountry = (e) =>{
        setCountry(e.label)
        console.log(e)
    }
    
    useEffect(() => {
        getTrips()
    }, [])
    
    const getTrips = ()=>{
        axios
        .get(`${baseUrl}trips`)
        .then((res)=>{
            setTripList(res.data.trips)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const allTrips = tripList.map((trip)=>{console.log("Palavra", trip)
        return(
            <option key={trip.id} value={trip.id}>
                {trip.name}
            </option>
            
        )
    })
    const applicationTrip = (event) =>{
        event.preventDefault()
        const body = {
            name: name,
            age: age,
            applicationText: applicationText,
            profession: profession,
            country: country
        }
        console.log(body)
        axios
        .post(`${baseUrl}trips/${params.id}/apply`,body,{
        })
        .then((res)=>{
            console.log(res.data)
            alert(' Sua aplicação para nosso  foguete  foi feita com sucesso 🚀 !')
            history.push("/trips/list")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div className="Application">
            <p>Application page</p>
            <form onSubmit ={applicationTrip}>
                <select value ={selectTrip} onChange={handleSelectTrip} required >{allTrips}</select>
                <input value ={name} onChange={handleName} placeholder="Name" type ='string' pattern={"(.*[a-z]){2}"}  required ></input>
                <input value ={age} onChange={handleAge} placeholder="Idade" type ='number' min = {18} required  ></input>
                <input value ={applicationText} onChange={handleApplicationText} placeholder="Texto de Candidatura " pattern ={'^.{50,}$'} type ='string' required ></input>
                <input value ={profession} onChange={handleProfession} placeholder="Profissão " pattern={"(.*[a-z]){10}"} type ='string' required ></input>
                <CountrySelector handleCountry= {handleCountry}/>
                <button type ="submit"> Enviar </button>
            </form>
            <button onClick={()=>goToLastPage(history)}>Voltar</button>
        </div>
    )
}

export default Application;