import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

export const SubmitButtonStyled = withStyles((theme) => ({
    root: {
        marginTop: '8%',
        display: 'block',
        margin: '0 auto',
        textAlign: 'center',
        backgroundColor: 'rgb(220, 0, 0)',
        color: 'white',
        padding: '4% 9%',
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
         display: 'block',
        '& .MuiTextField-root': {
        margin: theme.spacing(2.5),    
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              width: '16rem',
              borderRadius: `30px`,
              border: '2px solid hsla(84, 5%, 22%, 0.897)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'red',
              },
        },
    },
}
}))(FormControl);


