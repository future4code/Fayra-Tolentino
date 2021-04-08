import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';

const useStyles = makeStyles((theme) => ({
    root: {
    '& > *': {
    margin: theme.spacing(1),
    },
},
}));

export default function IconButtons() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <IconButton color="secondary" aria-label="add an alarm">
            <FavoriteBorderRoundedIcon />
    </IconButton>
    </div>
    );
}


