// Material Ui que deu bem errado e não consigo editar    
    
    import React from 'react'
    import { makeStyles } from '@material-ui/core/styles'
    import Card from '@material-ui/core/Card'
    import CardHeader from '@material-ui/core/CardHeader'
    import CardContent from '@material-ui/core/CardContent'
    import CardActions from '@material-ui/core/CardActions'
    import Collapse from '@material-ui/core/Collapse'
    import Avatar from '@material-ui/core/Avatar'
    import IconButton from '@material-ui/core/IconButton'
    import Typography from '@material-ui/core/Typography'
    import FavoriteIcon from '@material-ui/icons/Favorite'
    import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded'
    import ShareIcon from '@material-ui/icons/Share'
    import {secondaryColor} from '../../constants/colors'
    

    const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
    },
    avatar: {
        backgroundColor: secondaryColor,
    },
    }));

    export default function NewsCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    return (
        <Card className={classes.root}>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            </Avatar>
            }
            title={props.title}

            subheader={`${props.date} ${'-'} ${props.userName}`}
    
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.text}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="add to favorites">
            <ThumbDownRoundedIcon />
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography paragraph>
                {props.text}
            </Typography>
            </CardContent>
        </Collapse>
    
        </Card>
    );
    }




