// Para vermos todas as viagens

import React, {useState, useEffect}  from 'react'
import {goBack,goToApplication} from '../components/routes/cordinator'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {baseUrl} from '../components/Parameters'
import Header from '../components/Header'
import styled from 'styled-components'

const ListDiv = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding-top:20vh;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 
    'Helvetica Neue', sans-serif;
`
const Title = styled.h1 `
    color:#250340;
    font-size:3.2rem;
`
const ButtonsContainer = styled.div `
    padding-top:2vh;
`
const ButtonStyled = styled.button `
    height:40px;
    width:200px;
    border-radius:100px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:16px;
    margin-right:32px;
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
    const TripContainer = styled.div `
        /* display:flex; */
        width:360px;
        text-align:justify;
        margin-top:8vh;
        border-radius:5px;
        border: 1px solid rgb(146,47,161);
        padding:20px;
        box-shadow: 10px 5px 5px #a4b0be;
    `
    const TripTitle = styled.h3 `
        color:#922fa1;
        font-size:1.60rem;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
        'Open Sans', 'Helvetica Neue', sans-serif;
    `
    const TripText = styled.p `
        color:#922fa1;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
        'Open Sans', 'Helvetica Neue', sans-serif;
    `

    const SpanDetails =styled.span `
        font-weight:bold;
    `
    
// ----------------------------------------------------------------------------------------------------------------------

function List(props) {
    const history = useHistory()
    const [tripList, setTripList] = useState([])
    
    useEffect(() => {
        getTrips(props.trips)
    }, [props.trips])
    
    const getTrips = ()=>{
        axios
        .get(`${baseUrl}trips`)
        .then((res)=>{
            setTripList(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const allTrips = tripList.trips && tripList.trips.map((trip)=>{
        return(
            <TripContainer>
                <TripTitle>{trip.name}</TripTitle>
                <TripText> <SpanDetails> Descrição: </SpanDetails> {trip.description}</TripText>
                <TripText> <SpanDetails> Planeta de Destino: </SpanDetails>  {trip.planet}</TripText>
                <TripText> <SpanDetails> Duração: </SpanDetails>{trip.durationInDays}</TripText>
                <TripText> <SpanDetails> Data de Embarque: </SpanDetails> {trip.date}</TripText>
            </TripContainer>
        )
    })
    return (
        <ListDiv>
            <Header/>
            <Title>Lista de Viagens</Title>
            <ButtonsContainer>
                <ButtonStyled onClick={history.goBack}>Voltar</ButtonStyled>
                <ButtonStyled onClick={() => goToApplication(history)}> Inscreva-se</ButtonStyled>
            </ButtonsContainer>
                {allTrips}  
        </ListDiv>
    )
}

export default List;