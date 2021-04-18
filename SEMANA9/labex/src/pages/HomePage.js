import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

const ButtonContainer = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    margin:240px 20px;
    text-align:center;
`

function Home() {
    return (
        <div className="Home">
            <Header/>
            <ButtonContainer>
                <button>Ver Viagens</button>
                <button>Área Administrativa</button>
            </ButtonContainer>
            <Footer/>
        </div>
    );
}

export default Home;
