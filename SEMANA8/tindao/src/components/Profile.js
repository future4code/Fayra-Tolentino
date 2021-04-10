import {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {baseUrl} from './Paramenters'



export default function Profile (){
    const [profile, setProfile] = useState({})
    useEffect(() => {
        ProfileReturn()
    }, [])

    const ProfileReturn = async()=>{
        try{
            const basicProfile = await axios.get(baseUrl)
            setProfile(basicProfile.data.profile)
        }catch(error){
            console.log("error",error.basicProfile)
        }
    }

    const showProfile = ()=>{
        return(
            <div>
                <img src={profile.photo}/>
                <p>{profile.name}, {profile.age}</p>
                <p>{profile.bio}</p>
            </div>
        )
    }
    return (
        <div> 
            {showProfile()}
        </div>
    )
}