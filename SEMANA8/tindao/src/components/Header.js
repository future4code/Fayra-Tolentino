import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';



const useStyles = makeStyles((theme) => ({
    root: {
    '& > *': {
    margin: theme.spacing(1),
    },
},
}));

const HeaderContainer = styled.div `
    display: flex;
    width:20vw;
    position:absolute;
    top:50px;
    align-items: flex-end;
    justify-content:space-around;
    margin-left:64px;
`
const Title = styled.p `
    text-align:center;
    font-weight:700;
    font-size:25px;
    color:#ce93d8;
`
const Span = styled.span `
    color:#e91e63;
`

export default function IconButtons() {
    const classes = useStyles();
    return (
    <HeaderContainer>
        <Title>astro<Span>match</Span></Title>
        <div className={classes.root}>
            <IconButton size="large" color="secondary" aria-label="match">
                <QuestionAnswerOutlinedIcon/>
            </IconButton>
        </div>
    </HeaderContainer>
    );
}