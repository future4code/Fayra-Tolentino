import React from 'react'
import styled from 'styled-components'

// ____________________________Array de Posts________________

const postArray = [
  {
    userName:"Fayra",
    userPhoto: 'https://picsum.photos/50/50',
    userPost: 'https://picsum.photos/200/150'
  },
  {
    userName:"Jlo",
    userPhoto: 'https://picsum.photos/50/51',
    userPost: 'https://picsum.photos/200/151'
  },
  {
    userName:"Shakira",
    userPhoto: 'https://picsum.photos/50/52',
    userPost: 'https://picsum.photos/200/152'
  },
  {
    userName:"Veveta",
    userPhoto: 'https://picsum.photos/50/53',
    userPost: 'https://picsum.photos/200/153'
  }
]

// ____________________________Styled Components________________

const AppContainer = styled.div `
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
`
const FormContainer = styled.div `
  display:flex;
  justify-content:space-space-between;
  flex-direction:column;
  height:180px;
  width:240px;
  border:1px solid gray;
  margin:240px;
  padding:30px;
`


export default function Instafor(){
  
  
  
  return <div>
    <p>Teste da Tela</p>
  </div>
}

