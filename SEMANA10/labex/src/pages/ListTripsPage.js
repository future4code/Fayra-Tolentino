// Para vermos todas as viagens

import React, {useState, useEffect}  from 'react'
import {goBack,goToApplication} from '../components/routes/cordinator'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {baseUrl} from '../components/Parameters'

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
            <div>
                <h3>{trip.name}</h3>
                <p>{trip.description}</p>
                <p>{trip.planet}</p>
                <p>{trip.durationInDays}</p>
                <p>{trip.date}</p>
            </div>
        )
    })
    return (
        <div className="List">
            <p>List trip page</p>
            {allTrips}
            <button onClick={history.goBack}>Voltar</button>
            <button onClick={() => goToApplication(history)}> Inscreva-se</button>
        </div>
    )
}

export default List;