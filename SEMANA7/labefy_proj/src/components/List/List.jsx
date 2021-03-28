import React from "react";
import axios from "axios"
import { axiosConfig, baseUrl } from "../../paramenters";

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
                <div key={playlist.id}>
                    <p>{playlist.name}</p>
                    <button onClick ={()=> this.deletePlaylist(playlist.id)}>Excluir Playlist</button>
                </div>
        ))   
        return(
            <div>
                <h2> Suas Playlists </h2>
                    <p>{mapPlayList} </p> 
            </div>
        )
    }
}