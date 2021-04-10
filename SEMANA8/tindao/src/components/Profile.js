import {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {baseUrl} from './Paramenters'


const ProfileBase = styled.div `
    width:280px;
    height:300px;
    margin-top:-20px;
    position:relative;
    > img{
        width:100%;
        height:100%;
        border-radius:5px;
    }
`
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
            <ProfileBase>
                <img src={profile.photo}/>
                <p>{profile.name}, {profile.age}</p>
                <p>{profile.bio}</p>
            </ProfileBase>
        )
    }
    return (
        <div> 
            {showProfile()}
        </div>
    )
}