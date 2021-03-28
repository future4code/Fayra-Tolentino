import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { axiosConfig, baseUrl } from '../../paramenters';

// ---------------------------------------- Styled-Component-------------------------------------------------

const FormBase = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding-top:12vh;
`
const Title = styled.h1 `
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight:bolder;
    font-size:60px;
    color:#EE5A24;
`

const PlaylistCreate = styled.button `
    color:white;
    font-weight:bolder;
    width: 150px;
    height:50px;
    border-radius:120px;
    left:calc(50% - 75px);
    top:calc(50% - 25px);
    background: linear-gradient(60deg, #EE5A24, #f37055);
    cursor:pointer;
    line-height:12px;
    border:none;
    outline:none;
    &:hover{
        background: linear-gradient(60deg, #fa8231,#f37055);
    }
`
const MusicName = styled.input `
    width: 300px;
    height:42px;
    border:0 none;
    border-bottom: 1px solid #EE5A24;
`
const InputContainer = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    padding-top: 8vh;
`

// ---------------------------------------- Axios & Stucture-------------------------------------------------

export default class Form extends React.Component{
    state = {
        inputValue: ""
    }

    handlePlaylist = (event) =>{
        this.setState({inputValue:event.target.value})
    }

    createPlaylist = () =>{
        const body ={
            name: this.state.inputValue
        }

        axios
        .post(baseUrl,body,axiosConfig)
        .then((response) =>{
            alert("Playlist Criada com Sucesso")
            this.setState({inputValue:""})
            console.log(response)
        })
        .catch((error) =>{
            console.log(error)
            // this.setState({inputValue:''})
        })
    }
    render(){
        return(
            <FormBase>
                <Title>Labefy</Title>
                <InputContainer>
                    <MusicName
                        onChange={this.handlePlaylist}
                        value={this.state.inputValue}
                        placeholder=" Digite o nome da Playlist"
                    />
                <PlaylistCreate onClick ={this.createPlaylist}>Criar Playlist</PlaylistCreate>
                </InputContainer>
            </FormBase>
        )
    }
}




