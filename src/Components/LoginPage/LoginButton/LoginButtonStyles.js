import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const LoginButtonStyled = withStyles((theme) => ({
    root: {
    
            padding: '10px 20px',
            textShadow: '2px 2px 5px #b425a1',
            color: 'rgb(211, 15, 15)',
            boxShadow: 'green',
            fontWeight: '600',
            borderRadius: '3px',
            backgroundColor: 'white'
    
}
}))(Button);