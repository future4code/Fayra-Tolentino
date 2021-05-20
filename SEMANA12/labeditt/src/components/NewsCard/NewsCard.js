import React from 'react'
import styled from 'styled-components'

const CardDiv = styled.div `
    display:flex;
    flex-direction:column;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border:solid;
    margin: 2vh;
    padding:10px;
    width: clamp(350px, 70vw, 800px);
    background-color:white;
    border: 0.5px solid #747d8c;
    border-radius: 0px;
    text-align:left;
    color: rgb(77, 75, 73);
    box-shadow: 6px 4px 10px #a4b0be;
    /* &:hover{
    transform: scale(1.05);
    } */
`
// const HeaderDiv = styled.div `
//     width:70vw;
//     height:5vh;
//     background-color:#3742fa;
// `

const PostTitle = styled.p `
    font-weight:bold;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:20px;
    color: #5352ed;
    text-transform:uppercase;
`


    export default function NewsCard(props) {
    return (
        <CardDiv>
                <div>
                    <PostTitle>{props.title}</PostTitle>
                    <p>{`${props.date} ${'-'} ${props.userName}`}</p>
                </div>
                <p>{props.text}</p>
        </CardDiv>
    );
    }



 
