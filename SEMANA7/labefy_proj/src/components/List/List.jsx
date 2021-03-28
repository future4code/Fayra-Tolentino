import React from "react";
import axios from "axios"
import { axiosConfig, baseUrl } from "../../paramenters";
import styled from 'styled-components'

// ---------------------------------------- Styled-Component-------------------------------------------------

const ListBase = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding-top:12vh;
`
const TitleList = styled.h2 `
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight:bolder;
    font-size:60px;
    color:#EE5A24;
`
const ListContainer = styled.div `
    display:flex;
    align-items:center;
    flex-direction:row;
`
const Paragraph = styled.p `
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight:500;
    font-size:20px;
    color:#EE5A24;
    
`
const PlaylistDel = styled.button `
    color:white;
    font-weight:bolder;
    width: 140px;
    height:40px;
    border-radius:120px;
    left:calc(50% - 75px);
    top:calc(50% - 25px);
    background: linear-gradient(60deg, #EE5A24, #f37055);
    cursor:pointer;
    line-height:12px;
    border:none;
    outline:none;
    margin-left:190px;
    &:hover{
        background: linear-gradient(60deg, #fa8231,#f37055);
    }
`

// ---------------------------------------- Axios & Stucture-------------------------------------------------

export default class List extends React.Component{
    state = {
        playlists:[]
    }

    componentDidMount(){
        this.getAllPlaylist()
    }

    getAllPlaylist = async () => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, 
            {
                headers: {
                    Authorization: "fayra-miranda-cruz"
                }
            }
            )
            .then((res)=>{
                this.setState({playlists:res.data.result.list})
                console.log(res.data.result.list)
            })
            .catch((error)=>{
                console.log(error.res.data)
            })
    }

    deletePlaylist = (id) =>{
        if(window.confirm("Deseja deletar sua playlist?")){
            axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, 
            axiosConfig
            )
            .then((response)=>{
                this.getAllPlaylist()
                console.log(response)
            })
            .catch((error) =>{
                console.log(error)
            })
        }
    }

    render(){
        const mapPlayList =this.state.playlists.map((playlist) => (
                <ListContainer>
                    {/* <div key={playlist.id}> */}
                        <Paragraph>{playlist.name}</Paragraph>
                        <PlaylistDel onClick ={()=> this.deletePlaylist(playlist.id)}>Excluir Playlist</PlaylistDel>
                    {/* </div> */}
                </ListContainer>    
        ))   
        return(
            <ListBase>
                <TitleList> Suas Playlists </TitleList> 
                    <ListContainer>
                        <Paragraph>{mapPlayList} </Paragraph> 
                    </ListContainer>
            </ListBase>
        )
    }
}