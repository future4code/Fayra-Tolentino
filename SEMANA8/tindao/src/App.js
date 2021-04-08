import React from 'react'
import styled from 'styled-components'
import Buttons from './components/Buttons'
import Header from './components/Header'


const DivContainer = styled.div `
  display:flex;
  justify-content:center;
  align-items:center;
  padding-top:8vh;
`

const MainContainer = styled.div `
  width:28vw;
  height:80vh;
  display:flex;
  border-style: groove;
  border-radius:12px;
  justify-content:center;
  flex-direction: row;
  align-items: center;
  flex-direction:column;
`

function App() {
  return (
    <DivContainer>
      <MainContainer>
        <Header/>
        <Buttons/>
      </MainContainer>
    </DivContainer>
  );
}

export default App;
