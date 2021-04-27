import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

    const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    }));

    export function InputName(props) {
    const classes = useStyles();

    return (
        <div>
        <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
                <TextField id="input-with-icon-grid" value= {props.username} onChange ={props.onChange} name = {'username'}label="Digite seu nome" />
            </Grid>
            <Grid item>
                <AccountCircle />
            </Grid>
            </Grid>
        </div>
        </div>
    );
    }

    export default InputName;