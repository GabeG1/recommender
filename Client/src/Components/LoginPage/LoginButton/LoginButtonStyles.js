import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const LoginButtonStyled = withStyles((theme) => ({
  root: {
    padding: '0.4rem 1rem',
    textShadow: '2px 2px 5px #b425a1',
    color: 'rgb(211, 15, 15)',
    boxShadow: 'green',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '3px',
    backgroundColor: 'white',
    '& .MuiButton-label': {},
  },
}))(Button);
