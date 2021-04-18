// Formulário para o administrador criar uma nova viagem
import React,{useState} from 'react'
import {goToLastPage} from '../components/routes/cordinator'
import {useHistory, useParams} from 'react-router-dom'
import {useProtectedPage} from '../hooks/useProtectedPage'
import axios from 'axios'
import {baseUrl} from '../components/Parameters'


function CreateTrip() {
    useProtectedPage ()
    const [name, setName] = useState('')
    const [planet, setPlanet] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [durationInDay, setDurationInDay] = useState(0)
    const params = useParams()
    const history = useHistory()

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handlePlanet= (e) => {
        setPlanet(e.target.value)
    }
    const handleDate= (e) => {
        setDate(e.target.value)
    }
    const handleDescription= (e) => {
        setDescription(e.target.value)
    }
    const handleDurationInDay= (e) => {
        setDurationInDay(e.target.value)
    }

    const create = (event) =>{
        event.preventDefault()
        const body = {
                name: name,
                planet: planet,
                date: date,
                description: description,
                durationInDays:durationInDay
            }
        axios
        .post(`${baseUrl}trips`, body,{
            headers: {
                auth: window.localStorage.getItem('token')
            }
        })
        .then((res)=>{
            console.log(res.data)
            alert ("Viagem Criada com sucesso!")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className="CreateTrip">
            <p>Create trip page</p>
            <form form onSubmit ={create}>
                <input value={name} onChange={handleName} placeholder="Nome" type ='string' pattern={"(.*[a-z]){2}"} required />
                <select value={planet} onChange={handlePlanet} required>
                    <option value=""></option>
                    <option value="Jupiter">Jupiter</option>
                    <option value="Marte">Marte</option>
                    <option value="Mercurio">Mercúrio</option>
                    <option value="Netuno">Netuno</option>
                    <option value="Plutao">Plutão</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Terra">Terra</option>
                    <option value="Urano">Urano</option>
                    <option value="Venus">Venus</option>
                </select>
                <input value={date} onChange={handleDate} type ='date' required/>
                <input value={description} onChange={handleDescription} placeholder="Descrição" pattern ={'^.{30,}$'} type ='string' required />
                <input value={durationInDay} onChange={handleDurationInDay} placeholder="Duração da viagem" type ='number' min={50} required />
                <button type="submit">Criar Viagem</button>
                <button onClick={()=> goToLastPage(history)}>Voltar</button>
            </form>
        </div>
    );
}


export default CreateTrip;