import React from 'react';
import styled from 'styled-components';


// ---------------------------------------- Styled-Component-------------------------------------------------

const FooterDiv = styled.div `
    width: 100vw;
    height:8vh;
    background-color:#f07747;
    margin-top:180px;
    display:flex;
    text-align:center;
    justify-content:center;
`
const Author = styled.p `
    font-weight:500;
    color:black;
    
`

// ---------------------------------------- Stucture-------------------------------------------------
export default class Footer extends React.Component{
    render(){
        return(
            <FooterDiv>
                <Author>by Fayra Miranda ❤️</Author> 
            </FooterDiv>
        )
    }
}

