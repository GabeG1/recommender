import React, {useRef} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import {useHistory} from 'react-router-dom';
import {Search} from '../../SearchPage/Search/Search';
import './Login.css';
import * as Styles from './LoginStyles.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  withRouter,
  useRouteMatch,
} from 'react-router-dom';
import {Welcome} from '../../WelcomePage/Welcome/Welcome';
import {PostNewUser} from '../../SignupPage/Signup/SignupAuth';
import {PostExistingUser} from './LoginAuth';
const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'block',
    margin: '5% auto',
    width: 300,
    height: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '20px',
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
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
  },
}));

export default function Login(props) {
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const history = useHistory();
  const classes = useStyles();
  const loginFormValues = {
    usernameRef: useRef(),
    passwordRef: useRef(),
  };

  const handleClose = () => {
    history.goBack();
  };

  const handleClickShowPassword = () => {
    setValues({...values, showPassword: !values.showPassword});
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const sendFormToAuth = async () => {
    const responseData = await PostExistingUser(loginFormValues);
    return responseData.status == 200;
  };

  const body = (
    <div className={classes.paper}>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          return (await sendFormToAuth()) ? history.push({pathname: '/search',  response: loginFormValues}) : null;
        }}>
        <header className='LoginTitle'>Login</header>
        <TextField
          id='username'
          inputRef={loginFormValues.usernameRef}
          placeholder='Enter username'
          variant='outlined'
          required
        />

        <TextField
          id='password'
          inputRef={loginFormValues.passwordRef}
          type={values.showPassword ? 'text' : 'password'}
          placeholder='Enter password'
          variant='outlined'
          filled='true'
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}>
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Styles.SubmitButtonStyled type='submit'>
          Submit
        </Styles.SubmitButtonStyled>
      </form>
    </div>
  );

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        border={0}>
        {body}
      </Modal>
    </div>
  );
}
