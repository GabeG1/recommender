import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

export const SubmitButtonStyled = withStyles((theme) => ({
    root: {
        marginLeft: 70,
        marginTop: 35,
        display: 'block',
        textAlign: 'center',
        backgroundColor: 'rgb(220, 0, 0)',
        color: 'white',
        padding: '12px 40px',
        '&:hover': {
            backgroundColor: 'rgb(199, 11, 11)',
            boxShadow: '5px 5px 5px gray',
            fontWeight: 700,
            cursor: 'pointer'
        }
    }
}))(Button);

export const FormControlLogin = withStyles((theme) => ({
    root: {
         margin: '0 auto',
        '& .MuiTextField-root': {
        margin: theme.spacing(2.5),
        width: 250,
        }
    }
}))(FormControl);


