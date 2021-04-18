// Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela

import React,{useEffect,useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {useProtectedPage} from '../hooks/useProtectedPage'
import axios from 'axios'
import {baseUrl} from '../components/Parameters'

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
            <h2>{candidate.name}</h2>
            <p>{candidate.age}</p>
            <p>{candidate.profession}</p>
            <p>{candidate.country}</p>
            <p>{candidate.applicationText}</p>
            <button onClick ={()=> decidedCandidates(true, candidate.id)}>Aprovado</button>
            <button onClick ={()=> decidedCandidates(false, candidate.id)}>Reprovado</button>
            </div>
        )
    })

    const apdCandidates = trip.candidates &&  trip.candidates.map((candidate)=>{
        return(
            <div>
            <h2>{candidate.name}</h2>
            </div>
        )
    })
    
    return (
        <div className="TripDetails">
            <p>Trip detail page</p>
            <h4>{trip.name}</h4>
            <p>{trip.date}</p>
            <p>{trip.description}</p>
            <h2>Candidatos</h2>
            {candidates}
            <h2>Candidatos Aprovados</h2>
            {apdCandidates}
            <button onClick={history.goBack}>Voltar</button>
        </div>
    );
}

export default TripDetails;