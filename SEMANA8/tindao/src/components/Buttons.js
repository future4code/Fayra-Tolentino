import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';



const useStyles = makeStyles((theme) => ({
    root: {
    '& > *': {
    margin: theme.spacing(1),
    },
},
}));

const ButtonContainer = styled.div `
    display: flex;
    border:groove;
    width:20vw;
    align-items: flex-end;
    justify-content:space-around;
    margin-top:56vh;
`

export default function IconButtons() {
    const classes = useStyles();
    return (
    <ButtonContainer>
        <div className={classes.root}>
            <IconButton size="large" color="secondary" aria-label="match">
                <ClearRoundedIcon />
            </IconButton>
            <IconButton size="large" color="secondary" aria-label="match">
                <FavoriteBorderRoundedIcon />
            </IconButton>
        </div>
    </ButtonContainer>
    );
}


