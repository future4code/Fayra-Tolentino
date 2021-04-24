import React from 'react'
import styled from 'styled-components'


const HeaderStyle = styled.div `
    height:8vh;
    background-color:#922fa1;
    width:100vw;
    position:fixed;
    top:0px;
`

function Header (){
    return(
        <HeaderStyle></HeaderStyle>
    )
}

export default Header