import {useState, useEffect} from 'react'
// import styled from 'styled-components'
import axios from 'axios'
import {baseUrl} from './Paramenters'

export default function Match (){
    const [match, setMatch] = useState([])
    useEffect(() => {
        MatchReturn()
    }, [])

    const  MatchReturn = async()=>{
        try{
            const matchProfile = await axios.post(baseUrl)
            setMatch(matchProfile.data.profile)
        }catch(error){
            console.log("error",error.matchProfile)
        }
    }

    const showProfile = ()=>{
        return(
            <ProfileBase>
                <img src={profile.photo}/>
                <ProfileTitle>{profile.name}, {profile.age}</ProfileTitle>
                <ProfileDescription>{profile.bio}</ProfileDescription>
            </ProfileBase>
        )
    }
    return (
        <div> 
            {showProfile()}
        </div>
    )
}