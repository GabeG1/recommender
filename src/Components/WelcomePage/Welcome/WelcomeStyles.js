
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export const LoginGridItem = withStyles((theme) => ({
    root: {
      
        marginRight: '50px',
        zIndex: '2',
        marginTop: '20px'
    }
}))(Button);

export const SignupButton = withStyles((theme) => ({
    root: {
        fontSize: '15px',
        fontWeight: '600',
        display: 'block',
        textAlign: 'center',
        margin: '0 auto',
        color: 'white',
        background: 'linear-gradient(217deg, rgba(243, 111, 203, 0.8), rgba(255,0,0,0) 70.71%),'+
        'linear-gradient(127deg, rgb(231, 210, 20), rgba(19, 85, 102, 0) 70.71%),'+
        'linear-gradient(336deg, rgba(153, 26, 26, 0.8), rgba(17, 117, 121, 0) 70.71%)',
        padding: '8px 100px',
        zIndex: '3',
        boxShadow: 'green',
        borderRadius: '30px'
    }
}))(Button);

