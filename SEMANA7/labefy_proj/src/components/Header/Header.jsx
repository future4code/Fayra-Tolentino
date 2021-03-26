import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.div `
    width: 100vw;
    height:12vh;
    background-color:#EE5A24;
`

const AcessPlaylist = styled.button `
    color:white;
    font-weight:bolder;
    text-transform:uppercase;
    align-items:flex-start;
    margin-top:2.4vh;
    margin-left:80vw;
    width: 150px;
    height:50px;
    border-radius:120px;
    left:calc(50% - 75px);
    top:calc(50% - 25px);
    background: linear-gradient(60deg, #EE5A24, #f37055);
    cursor:pointer;
    line-height:12px;
    border-color:white;
    `

export default class Form extends React.Component{
    render(){
        return(
            <div>
                <HeaderStyle>
                <AcessPlaylist>Acessar Playlist</AcessPlaylist>
                </HeaderStyle>
            </div>
        )
    }
}