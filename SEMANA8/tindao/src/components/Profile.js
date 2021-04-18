import {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {baseUrl} from './Paramenters'


const ProfileBase = styled.div `
    width:280px;
    height:300px;
    margin-top:-89px;
    position:relative;
    > img{
        width:100%;
        height:100%;
        border-radius:5px;
    }
`

const ProfileTitle = styled.p `
    font-size:large;
    font-weight:bolder;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 
    'Helvetica Neue', sans-serif;
    color:#e91e63;
`
const ProfileDescription = styled.p `
    font-size:14px;
    line-height:16.1px;
    letter-spacing:normal;
    font-weight:500;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 
    'Helvetica Neue', sans-serif;
    color:#e91e63;
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