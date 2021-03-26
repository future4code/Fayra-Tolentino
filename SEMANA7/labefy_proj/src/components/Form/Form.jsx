import React from 'react';
import styled from 'styled-components';

const FormBase = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding-top:20vh;
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
    text-transform:uppercase;
    width: 150px;
    height:50px;
    border-radius:160px;
    left:calc(50% - 75px);
    top:calc(50% - 25px);
    background: linear-gradient(60deg, #EE5A24, #f37055);
    cursor:pointer;
    line-height:12px;
    
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
    padding-top: 16vh;
`

export default class Form extends React.Component{
    render(){
        return(
            <FormBase>
                <Title>Labefy</Title>
                <InputContainer>
                    <MusicName
                        // onChange={this.handleName}
                        // value={this.state.name}
                        placeholder="Nome da Playlist"
                    />
                <PlaylistCreate>Criar Playlist</PlaylistCreate>
                </InputContainer>
            </FormBase>
        )
    }
}




