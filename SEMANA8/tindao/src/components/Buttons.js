import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import axios from 'axios';
import { baseUrl } from './Paramenters';
// import Profile from './Profile'



const useStyles = makeStyles((theme) => ({
    root: {
    '& > *': {
    margin: theme.spacing(1),
    },
},
}));

const ButtonContainer = styled.div `
    display: flex;
    width:20vw;
    position:absolute;
    justify-content:space-around;
    top:546px;
`

// const ChoseProfile = async(id,chosePerson) =>{
//     const body ={
//         "id":id,
//         "choice":chosePerson
//     }
//     try{
//         axios.post(baseUrl,body)

//         // Pegar o Profile return e no botão de x passa post como negativo e no s2 passa post como positivo 
//     }
// }

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


