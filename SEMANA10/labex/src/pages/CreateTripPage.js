// Formulário para o administrador criar uma nova viagem
import React,{useState} from 'react'
import {goToLastPage} from '../components/routes/cordinator'
import {useHistory, useParams} from 'react-router-dom'
import {useProtectedPage} from '../hooks/useProtectedPage'
import axios from 'axios'
import {baseUrl} from '../components/Parameters'
import Header from '../components/Header'
import styled from 'styled-components'

const CreateTripDiv = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding-top:16vh;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 
    'Helvetica Neue', sans-serif;
`
const ButtonComeback = styled.button `
    height:40px;
    width:120px;
    border-radius:100px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:16px;
    margin-left:-980px;
    margin-top:32px;
    font-weight:600;
    letter-spacing:normal;
    text-align:center;
    text-decoration: none;
    border: 1px solid rgb(146,47,161);
    position: relative;
    overflow: hidden;
    color:#250340;
    background-color:transparent;
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

const Title = styled.h1 `
    color:#250340;
    font-size:3.2rem;
`
const DivForm = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    width:30vw;
    margin-top:-10px;
    display:flex;
    flex-direction:column;
    /* padding-left:8vw; */
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
const SelectStyle = styled.select `
    width:410px;
    height: 35px;
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

// ----------------------------------------------------------------------------------------------------------------------------------------

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
        <CreateTripDiv>
            <Header/>
            <ButtonComeback onClick={()=> goToLastPage(history)}>Voltar</ButtonComeback>
            <Title>Criar Viagem 🪐</Title>
            <DivForm> 
                <form form onSubmit ={create}>
                    <InputStyle value={name} onChange={handleName} placeholder="Nome" type ='string' pattern={"(.*[a-z]){2}"} required />
                    <SelectStyle value={planet} onChange={handlePlanet} required>
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
                    </SelectStyle>
                    <InputStyle value={date} onChange={handleDate} type ='date' required/>
                    <InputStyle value={description} onChange={handleDescription} placeholder="Descrição" pattern ={'^.{30,}$'} type ='string' required />
                    <InputStyle value={durationInDay} onChange={handleDurationInDay} placeholder="Duração da viagem" type ='number' min={50} required />
                    <ButtonStyled type="submit">Criar Viagem</ButtonStyled>
                </form>
            </DivForm>
        </CreateTripDiv>
    );
}


export default CreateTrip;