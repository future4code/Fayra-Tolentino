import React from 'react'
import styled from 'styled-components'
import Buttons from './components/Buttons'
// import Header from './components/Header'
// import Profile from './components/Profile'


const DivContainer = styled.div `
  display:flex;
  justify-content:center;
  align-items:center;
  padding-top:8vh;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
        {/* <Header/> */}
          {/* <Profile/> */}
        <Buttons/>
      </MainContainer>
    </DivContainer>
  );
}

export default App;
