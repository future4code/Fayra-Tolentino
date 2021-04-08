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
    border:groove;
    width:20vw;
    align-items: flex-end;
    justify-content:space-around;
`

export default function IconButtons() {
    const classes = useStyles();
    return (
    <HeaderContainer>
        <div className={classes.root}>
            <IconButton size="large" color="secondary" aria-label="match">
                <QuestionAnswerOutlinedIcon/>
            </IconButton>
        </div>
    </HeaderContainer>
    );
}