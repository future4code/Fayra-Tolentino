// Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela

import React,{useEffect,useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {useProtectedPage} from '../hooks/useProtectedPage'
import axios from 'axios'
import {baseUrl} from '../components/Parameters'
import Header from '../components/Header'
import styled from 'styled-components'

const TripDetailsDiv = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top:16vh;
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
    margin-top:36px;
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
const TripDiv =styled.div `
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
        text-align:left;
    `

const CandidateDiv =styled.div `
    width:360px;
    text-align:justify;
    margin-top:2vh;
    border-radius:5px;
    border: 1px solid rgb(146,47,161);
    padding:30px;
    box-shadow: 10px 5px 5px #a4b0be;
`
const SecondTitle = styled.h1 `
    margin-top:32px;
    color:#250340;
    font-size:2rem;
`

const HorizontalLine =styled.div `
    width: 90vw;
    border: 1px solid #922fa1;
    margin-top:60px;
    margin-bottom:30px;
`
const TripText = styled.p `
        color:#922fa1;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
        'Open Sans', 'Helvetica Neue', sans-serif;
    `

const SpanDetails =styled.span `
        font-weight:bold;
    `
    
const ButtonStyled = styled.button `
    height:40px;
    width:100px;
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
const AppDiv =styled.div `
    margin-top:-100px;
`
// ------------------------------------------------------------------------------------------------------------------------

export const TripDetails = () => {
    useProtectedPage ()
    const [trip, setTrip] = useState({})
    const history = useHistory()
    const params = useParams()

    useEffect(() => {
        getTripDetail(`${params.id}`);
    }, []);
    
    const getTripDetail = () => {
        const token = window.localStorage.getItem("token");
    
        axios
        .get(`${baseUrl}trip/${params.id}`,
            {
            headers: {
                auth: token
            }
        }
        )
        .then((res) => {
            setTrip(res.data.trip);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    const decidedCandidates =(approve, candidateId)=>{
        const token = window.localStorage.getItem("token");
        const body={
            approve: approve
        }
        axios
        .put(`${baseUrl}trips/${trip.id}/candidates/${candidateId}/decide`,body,
        {
            headers: {
                auth: token
            }
        })
        .then(()=>{
            if(approve){
                alert("Candidato foi aceito!")
            } else{
                alert("Candidato não foi aceito!")
            }
            getTripDetail() 
        }) 
    }


    const candidates = trip.candidates &&  trip.candidates.map((candidate)=>{
        return(
            <div>
                <TripTitle><SpanDetails> Nome:</SpanDetails> {candidate.name}</TripTitle>
                <TripText><SpanDetails> Idade: </SpanDetails> {candidate.age}</TripText>
                <TripText><SpanDetails> Profissão: </SpanDetails> {candidate.profession}</TripText>
                <TripText><SpanDetails> País: </SpanDetails> {candidate.country}</TripText>
                <TripText> <SpanDetails> Texto Aplicação: </SpanDetails> {candidate.applicationText}</TripText>
                <ButtonStyled onClick ={()=> decidedCandidates(true, candidate.id)}>Aprovado</ButtonStyled>
                <ButtonStyled onClick ={()=> decidedCandidates(false, candidate.id)}>Reprovado</ButtonStyled>
            </div>
        )
    })

    const apdCandidates = trip.candidates &&  trip.candidates.map((candidate)=>{
        return(
            <TripDetailsDiv>
            <TripTitle>{candidate.name}</TripTitle>
            </TripDetailsDiv>
        )
    })
    
    return (
        <TripDetailsDiv>
            <Header/>
            <ButtonComeback onClick={history.goBack}>Voltar</ButtonComeback>
            <Title>Detalhes da Viagem</Title>
            <TripDiv>
                <TripTitle> Viagem - {trip.name}</TripTitle>
                <TripText><SpanDetails> Data: </SpanDetails> {trip.date}</TripText>
                <TripText><SpanDetails> Descrição: </SpanDetails> {trip.description}</TripText>
            </TripDiv>
            
            <HorizontalLine></HorizontalLine>

            <SecondTitle>Candidatos</SecondTitle>
            <CandidateDiv>
                {candidates}
            </CandidateDiv>

            <HorizontalLine></HorizontalLine>
            <SecondTitle>Candidatos Aprovados</SecondTitle>
            <AppDiv>
                {apdCandidates}
            </AppDiv>
        </TripDetailsDiv>
    );
}

export default TripDetails;