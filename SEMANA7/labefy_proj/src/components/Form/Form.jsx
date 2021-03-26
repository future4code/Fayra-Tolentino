import React from 'react';
import styled from 'styled-components';

const PlaylistCreate = styled.button `
    color:white;
    font-weight:bolder;
    text-transform:uppercase;
    width: 150px;
    height:50px;
    border-radius:160px;
    left:calc(50% - 75px);
    top:calc(50% - 25px);
    background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
    cursor:pointer;
    line-height:12px;
    
`
const MusicName = styled.input `
    width: 300px;
    height:42px;
    border:0 none;
    border-bottom: 1px solid black;
`

export default class Form extends React.Component{
    render(){
        return(
            <div className= "FormBase">
                <h1>Labefy</h1>
                <MusicName
                    // onChange={this.handleName}
                    // value={this.state.name}
                    placeholder="Nome da Playlist"
                />
                <PlaylistCreate>Criar Playlist</PlaylistCreate>
            </div>
        )
    }
}




