import React from 'react'
import styled from 'styled-components'
import Heart from './components/Heart'

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
`
function App() {
  return (
    <DivContainer>
      <MainContainer>
        <Heart/>
      </MainContainer>
    </DivContainer>
  );
}

export default App;
