import { createMuiTheme } from '@material-ui/core/styles';
import {primaryColor,secondaryColor, neutralColor} from './colors'


const theme = createMuiTheme({
    palette: {
        primary: {
        main: primaryColor,
        contrastText:'white'
        },
        secondary: {
        main: secondaryColor,
        contrastText:'white'
        },
        text:{
            primary:neutralColor
        }
    },
});

export default theme;