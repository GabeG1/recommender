import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

export const SubmitButtonStyled = withStyles((theme) => ({
    root: {
        marginTop: 35,
        display: 'block',
        margin: '0 auto',
        textAlign: 'center',
        backgroundColor: 'rgb(220, 0, 0)',
        color: 'white',
        padding: '12px 30px',
        '&:hover': {
            backgroundColor: 'rgb(199, 11, 11)',
            boxShadow: '5px 5px 5px gray',
            fontWeight: 700,
            cursor: 'pointer'
        }
    }
}))(Button);

export const FormControlSignup = withStyles((theme) => ({
    root: {
        display: 'block',
         margin: '0 auto',
         textAlign: 'center',
        '& .MuiTextField-root': {
        margin: theme.spacing(2.5),
        width: 375,
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                display: 'block',
                margin: '0 auto',
              //  border: '2px solid hsla(84, 5%, 22%, 0.897)',
                backgroundColor: 'hsla(220, 15%, 10%, 0.075)',
                padding: 30,
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(221, 61, 61)',
               // backgroundColor: 'hsla(220, 20%, 2%, 0.05)',
               backgroundColor: 'hsla(0, 0%, 20%, 0.05)',
              },
              '&:hover fieldset': {
                border: '2px solid rgb(221, 61, 61)',
              },
            },    
            '& .MuiOutlinedInput-input': {
                display: 'block',
                PaddingLeft: '-30px',
            },
        },
        ' & .MuiGrid-item': {
            '& .MuiTextField-root': {
            maxWidth: 167.5,
           
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    display: 'inline',
                },
            },
        },
     }
    }
}))(FormControl);
