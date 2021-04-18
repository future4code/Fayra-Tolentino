// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useProtectedPage} from '../hooks/useProtectedPage'
import {goToCreateTrip,goToTripDetails} from './../components/routes/cordinator'
import axios from 'axios'
import {baseUrl} from '../components/Parameters'


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
            <div>
                <h3>{trip.name}</h3>
                <button onClick = {()=>deleteTrip(trip.id)}>Apagar</button>
                <button  onClick = {()=>history.push(`/admin/trips/${trip.id}`) }>Detalhe</button>
            </div>
        )
    })

    return (
        <div className="Home">
            <p>AdminHome</p>
            {allTrips}
            <button onClick={history.goBack}>Voltar</button>
            <button onClick={() => goToCreateTrip(history)}> Criar Viagem</button>
            <button> Logout </button>
        </div>
    );
}

export default AdminHome;
