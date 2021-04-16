// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useProtectedPage} from '../hooks/useProtectedPage'
import {goToCreateTrip,goToTripDetails,goToLogin} from './../components/routes/cordinator'


function AdminHome() {
    useProtectedPage ()
    const history = useHistory();
    return (
        <div className="Home">
            <p>AdminHome</p>
            <button onClick={history.goBack}>Voltar</button>
            <button onClick={() => goToTripDetails(history)}>Ver Viagens</button>
            <button onClick={() => goToCreateTrip(history)}> Criar Viagem</button>
            <button> Logout </button>
        </div>
    );
}

export default AdminHome;
