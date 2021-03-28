import React from "react";
import axios from "axios"
import { axiosConfig, baseUrl } from "../../paramenters";


export default class List extends React.Component{
    state ={
        name:[]
    }

    componentDidMount(){
        this.getAllPlaylist()
    }

    getAllPlaylist = async () => {
        try{
            const response = await axios.get(baseUrl,axiosConfig)
            this.setState({name:response.data})
        }catch (error){
            console.log(error)
        }
    }

    deletePlaylist = (id) =>{
        if(window.confirm("Deseja deletar sua playlist?")){
            axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:${id}`, 
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
        const mapPlayList =this.state.musicsList.map((playlist) =>{
            return(
                <div key={playlist.id}>
                    <p>{playlist.name}</p>
                    <button onClick ={()=> this.deletePlaylist(playlist.id)}>Excluir Playlist</button>
                </div>
            )
        })   
        return(
            <div>
                <h2> Suas Playlists </h2>
                {mapPlayList}
            </div>
        )
    }
}