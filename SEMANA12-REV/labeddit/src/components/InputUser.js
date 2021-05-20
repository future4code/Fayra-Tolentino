import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import AccountCircle from '@material-ui/icons/AccountCircle'

    const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    }));

    export function InputUser(props) {
    const classes = useStyles();

    return (
        <div>
        <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
                <TextField id="input-with-icon-grid" value= {props.email} onChange ={props.onChange} name = {'email'}label="Digite seu e-mail" />
            </Grid>
            <Grid item>
                <AccountCircle />
            </Grid>
            </Grid>
        </div>
        </div>
    );
    }

    export default InputUser;