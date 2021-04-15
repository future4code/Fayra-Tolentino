// Formulário para o administrador criar uma nova viagem
import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useProtectedPage} from '../hooks/useProtectedPage'

function CreateTrip() {
    useProtectedPage ()
    const [trip, setTrip] = useState({})
    const history = useHistory()
    return (
        <div className="CreateTrip">
            <p>Create trip page</p>
        </div>
    );
}

export default CreateTrip;