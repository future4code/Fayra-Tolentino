// Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela

import React,{useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useProtectedPage} from '../hooks/useProtectedPage'
import axios from 'axios'

export const TripDetails = () => {
    useProtectedPage ()
    const [trip, setTrip] = useState({})
    const history = useHistory()

    useEffect (() =>{
        getTripDetail()
    },[])

    return (
        <div className="TripDetails">
            <p>Trip detail page</p>
        </div>
    );
}

export default TripDetails;