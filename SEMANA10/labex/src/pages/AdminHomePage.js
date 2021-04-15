// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useProtectedPage} from '../hooks/useProtectedPage'


function AdminHome() {
    useProtectedPage ()
    const history = useHistory()
    return (
        <div className="AdminHome">
            <p>Add page</p>
        </div>
    );
}

export default AdminHome;
