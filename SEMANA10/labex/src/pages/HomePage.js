// Para o usuário escolher entre Área Administrativa e Lista de Viagens
// cor 1: #250340
// cor 2: #922fa1
import React from 'react'
import {goToList,goToLogin} from '../components/routes/cordinator'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import Header from '../components/Header'

const HomePage = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding-top:28vh;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 
    'Helvetica Neue', sans-serif;
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
    margin-right:32px;
    font-weight:600;
    letter-spacing:normal;
    text-align:center;
    text-decoration: none;
    border: 1px solid rgb(146, 148, 248);
    position: relative;
    overflow: hidden;
    color:white;
    background-color:#922fa1;
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
const Title = styled.h1 `
    color:#250340;
    font-size:3.2rem;
`
const SubTitle = styled.h1 `
    color:#250340;
    font-size:1rem;
    font-weight:500;
    margin-bottom:20px;
`
// ----------------------------------------------------------------------------------------------------------------------------------------

function Home() {
    const history = useHistory();
    return (
        <HomePage>
            <Header/>
            <Title>LabeX</Title>
            <SubTitle>Encontre as melhores viagens espaciais!</SubTitle>
            <ButtonsContainer>
                <ButtonStyled onClick={() => goToList(history)}>Ver Viagens</ButtonStyled>
                <ButtonStyled onClick={() => goToLogin(history)}> Administrador</ButtonStyled>
            </ButtonsContainer>
        </HomePage>
    );
}

export default Home;