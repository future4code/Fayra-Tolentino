// Formulário para o administrador criar uma nova viagem
import React,{useState} from 'react'
import {goToLastPage,goToCreateTrip} from '../components/routes/cordinator'
import {useHistory} from 'react-router-dom'
import {useProtectedPage} from '../hooks/useProtectedPage'


function CreateTrip() {
    useProtectedPage ()
    const [name, setName] = useState('')
    const [planet, setPlanet] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [durationInDay, setDurationInDay] = useState('')
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

    const create = () =>{
        const body = {
                name: name,
                planet: planet,
                date: date,
                description: description,
                durationInDays:durationInDay
            }
        }

        

    return (
        <div className="CreateTrip">
            <p>Create trip page</p>
            <form>
                <input value={name} onChange={handleName} placeholder="Nome" type ='string' pattern={"(.*[a-z]){2}"} required />
                <select value={planet} onChange={handlePlanet} required>
                    <option value=""></option>
                    <option value="Mercurio">Mercúrio</option>
                    <option value="Venus">Venus</option>
                    <option value="Terra">Terra</option>
                    <option value="Marte">Marte</option>
                    <option value="Jupiter">Jupiter</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Urano">Urano</option>
                    <option value="Netuno">Netuno</option>
                    <option value="Plutao">Plutão</option>
                </select>
                <input value={date} onChange={handleDate} type ='date' required/>
                <input value={description} onChange={goToCreateTrip()} placeholder="Descrição" type ='string' pattern={"^[A-Z]{1,10}$"} required />
                <input value={durationInDay} onChange={handleDurationInDay} placeholder="Duração da viagem" type ='number' min={50} required />
                <button onClick={create}>Criar Viagem</button>
                <button onClick={goToLastPage()}>Voltar</button>
            </form>
        </div>
    );
}


export default CreateTrip;