// Para o usuário escolher entre Área Administrativa e Lista de Viagens
// cor 1: #250340
// cor 2: #922fa1
import React from 'react'
import {goToList,goToLogin} from '../components/routes/cordinator'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'

const HomePage = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding-top:32vh;
`

const ButtonsContainer = styled.div `
    padding-top:4vh;
`

const ButtonStyled = styled.button `
    height:40px;
    width:200px;
    border-radius:100px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:16px;
    font-weight:600;
    letter-spacing:normal;
    text-align:center;
    text-decoration: none;
    border: 1px solid rgb(146, 148, 248);
    position: relative;
    overflow: hidden;
    color:#250340;
    background-color:transparent;
    &:hover {
        box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
    }
    &:before {
        background: linear-gradient(120deg,transparent,rgba(146, 148, 248, 0.4),transparent);
        transition: all 650ms;
    }
    &:hover:before {
        left: 100%;
    }
`



function Home() {
    const history = useHistory();
    return (
        <HomePage>
            <h1>LabeX</h1>
            <p>Encontre as melhores viagens espaciais!</p>
            <ButtonsContainer>
                <ButtonStyled onClick={() => goToList(history)}>Ver Viagens</ButtonStyled>
                <button onClick={() => goToLogin(history)}> Administrador</button>
            </ButtonsContainer>
        </HomePage>
    );
}

export default Home;