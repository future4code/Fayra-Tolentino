// Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
import React, {useState,useEffect}  from 'react'
import axios from 'axios'
import {goToLastPage,goToApplication} from '../components/routes/cordinator'
import { useHistory,useParams } from "react-router-dom";
import CountrySelector from '../components/buttons/CountrySelector';
import {baseUrl} from '../components/Parameters'
import Header from '../components/Header'
import styled from 'styled-components'


const ApplicationDiv = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding-top:4vh;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 
    'Helvetica Neue', sans-serif;
`

const Title = styled.h1 `
    color:#250340;
    font-size:3.2rem;
`
const ButtonComeback = styled.button `
    height:40px;
    width:120px;
    border-radius:100px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:16px;
    margin-left:-980px;
    margin-top:48px;
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
const CountryGambs = styled.div `
    margin-top:20px;
    border: 1px solid rgb(146,47,161);
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

// -------------------------------------------------------------------------------------------------------------------------------------------

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
        < ApplicationDiv>
            <Header/>
            <ButtonComeback onClick={()=>goToLastPage(history)}>Voltar</ButtonComeback>
            <Title>Inscreva-se 🚀</Title>
            <DivForm>
                <form onSubmit ={applicationTrip}>
                    <SelectStyle value ={selectTrip} onChange={handleSelectTrip} required >{allTrips}</SelectStyle>
                    <InputStyle value ={name} onChange={handleName} placeholder="Name" type ='string' pattern={"(.*[a-z]){2}"}  required ></InputStyle>
                    <InputStyle value ={age} onChange={handleAge} placeholder="Idade" type ='number' min = {18} required  ></InputStyle>
                    <InputStyle value ={applicationText} onChange={handleApplicationText} placeholder="Texto de Candidatura " pattern ={'^.{50,}$'} type ='string' required ></InputStyle>
                    <InputStyle value ={profession} onChange={handleProfession} placeholder="Profissão " pattern={"(.*[a-z]){10}"} type ='string' required ></InputStyle>
                    <CountryGambs>
                    <CountrySelector handleCountry= {handleCountry} />
                    </CountryGambs>
                    <ButtonStyled type ="submit"> Enviar </ButtonStyled>
                </form>
            </DivForm>
        </ ApplicationDiv>
    )
}

export default Application;