import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const SignupButtonStyled = withStyles((theme) => ({
    root: {
        fontSize: '1.3rem',
        margin: '0 auto',
        fontWeight: '600',
        display: 'block',
        textAlign: 'center',
        fontFamily: 'Oswald',
        color: 'white',
        background: 'linear-gradient(217deg, rgba(243, 111, 203, 0.8), rgba(255,0,0,0) 70.71%),\
        linear-gradient(127deg, rgb(231, 210, 20), rgba(19, 85, 102, 0) 70.71%), \
        linear-gradient(336deg, rgba(153, 26, 26, 0.8), rgba(17, 117, 121, 0) 70.71%)',
        padding: '0.5rem 8rem',
        boxShadow: 'green',
        borderRadius: '3rem',
            '&:hover': {
    background: 'linear-gradient(217deg, rgba(184, 6, 130, 0.8), rgba(255,0,0,0) 70.71%), \
    linear-gradient(127deg, rgb(151, 137, 5), rgba(19, 85, 102, 0) 70.71%), \
    linear-gradient(336deg, rgba(187, 4, 4, 0.8), rgba(17, 117, 121, 0) 70.71%)'
            }
    }
}))(Button);