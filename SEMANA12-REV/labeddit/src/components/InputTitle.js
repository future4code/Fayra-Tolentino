import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

    const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        },
    },
    }));

    export default function InputTitle(props) {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
        <div>
            <TextField required id="standard-required" label="Título" value= {props.title} onChange ={props.onChange} name = {'title'}/>
        </div>
        </form>
    )
    }