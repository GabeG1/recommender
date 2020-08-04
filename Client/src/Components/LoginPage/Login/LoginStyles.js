import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
      cursor: 'pointer',
    },
  },
}))(Button);
