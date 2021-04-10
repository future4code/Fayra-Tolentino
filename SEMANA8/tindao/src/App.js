import React from 'react'
import styled from 'styled-components'
import Buttons from './components/Buttons'
import Header from './components/Header'
import Profile from './components/Profile'


const DivContainer = styled.div `
  display:flex;
  justify-content:center;
  align-items:center;
  /* padding-top:8vh; */
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  height:100vh;
`

const MainContainer = styled.div `
  width:28vw;
  height:84vh;
  display:flex;
  border-style: groove;
  border-radius:12px;
  justify-content:center;
  flex-direction: row;
  align-items: center;
  flex-direction:column;
  background-color:white;
`


function App() {
  return (
    <DivContainer>
      <MainContainer>
        <Header/>
          <Profile/>
        <Buttons/>
      </MainContainer>
    </DivContainer>
  );
}

export default App;
