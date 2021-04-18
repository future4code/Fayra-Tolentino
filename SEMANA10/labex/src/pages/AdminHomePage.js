// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useProtectedPage} from '../hooks/useProtectedPage'
import {goToCreateTrip,goToTripDetails} from './../components/routes/cordinator'
import axios from 'axios'
import {baseUrl} from '../components/Parameters'
import Header from '../components/Header'
import styled from 'styled-components'

const HomeDiv = styled.div `
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
const TripsDiv = styled.div `
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
const ButtonCard = styled.button `
    width:40px;
    height:40px;
    border-radius:5px;
    margin-left:5px;
`



// ----------------------------------------------------------------------------------------------------------------------

function AdminHome() {
    useProtectedPage ()
    const history = useHistory();
    const [tripList, setTripList] = useState([])
    
    useEffect(() => {
        getTrips()
        const token = window.localStorage.getItem('token') 
            if(token === null){
                history.push("/login")
            }
    }, [history])
    
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
    

    const deleteTrip = (id)=>{
        if(window.confirm("Você deseja deletar mesmo?")){
        const token = window.localStorage.getItem('token') 
        axios
        .delete(`${baseUrl}trips/${id}`,
        {   
            headers:{
                auth:token
            }
        })
        .then(()=>{
            getTrips()
        })
        .catch((err)=>{
            console.log(err)
        })
        }
    }
    const allTrips = tripList.trips && tripList.trips.map((trip)=>{
        return(
            <TripsDiv>
                <TripTitle>{trip.name}</TripTitle>
                <ButtonCard onClick = {()=>deleteTrip(trip.id)}>❌</ButtonCard>
                <ButtonCard  onClick = {()=>history.push(`/admin/trips/${trip.id}`) }>➕</ButtonCard>
            </TripsDiv>
        )
    })

    return (
        <HomeDiv>
            <Header/>
            <Title>Painel Administrativo</Title>
            <div>
                {allTrips}
            </div>
            <button onClick={history.goBack}>Voltar</button>
            <button onClick={() => goToCreateTrip(history)}> Criar Viagem</button>
            {/* <button> Logout </button> */}
        </HomeDiv>
    );
}

export default AdminHome;
