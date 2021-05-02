import React from 'react'
import styled from 'styled-components'
import { useHistory, Link } from "react-router-dom";

const HeaderStyled = styled.div `
    display:flex;
    color:white;
    font-weight:500;
    justify-content:space-between;
    text-decoration:none;
    font-size:20px;
    padding:20px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width:100vw;
    height:7vh;
    background-color:#5352ed;
    cursor: pointer;
`
const LogoTitle = styled.div `
    color:white;
    text-decoration:none;
    font-weight:500;
`

export const Header = () =>{
    const history = useHistory();
    return(
        <HeaderStyled>
            <Link to="/feed"> <LogoTitle>LabEditt</LogoTitle> </Link>
        </HeaderStyled>
    )
}

export default Header