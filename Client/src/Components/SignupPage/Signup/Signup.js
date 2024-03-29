//#region
import React, {useRef} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router, useHistory} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import './Signup.css';
import * as Styles from './SignupStyles.js';
import {authenticateUser} from './SignupAuth';

//#endregion

const useStyles = makeStyles((theme) => ({
  paper: {
    overflowY: 'auto',
    display: 'block',
    margin: '5% auto',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    maxHeight: '60%',
    padding: theme.spacing(2, 1, 3),
    outline: 'none',
    textAlign: 'center',
    '& .MuiTextField-root': {
      margin: theme.spacing(2.5),
      width: 375,
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          display: 'block',
          margin: '0 auto',
          backgroundColor: 'hsla(220, 15%, 10%, 0.075)',
          padding: '5%',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'rgb(221, 61, 61)',
          backgroundColor: 'hsla(0, 0%, 20%, 0.05)',
        },
        '&:hover fieldset': {
          border: '2px solid rgb(221, 61, 61)',
        },
      },
    },
    ' & .MuiGrid-item': {
      '& .MuiTextField-root': {
        maxWidth: '10.5rem',

        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            display: 'inline',
          },
        },
      },
    },
    '&::-webkit-scrollbar': {
      width: 15,
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: 30,
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgb(255, 137, 137)',
      borderRadius: 30,
    },
    /* Handle */
    '&::-webkit-scrollbar-thumb:hover': {
      background: 'rgb(247, 92, 92)',
    },
  },
}));

export default function Signup(props) {
  const allLetters = '^[A-Za-z]+$';
  const noWhiteSpaces = "[^' ']+$";
  const validEmail = '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$';

  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const [firstNameValue, setFirstNameValue] = React.useState('');
  const [lastNameValue, setLastNameValue] = React.useState('');
  const [userNameValue, setUserNameValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const history = useHistory();
  const classes = useStyles();
  const signupFormValues = {
    fNameRef: useRef(),
    lNameRef: useRef(),
    usernameRef: useRef(),
    emailRef: useRef(),
    passwordRef: useRef(),
    passwordConfirmRef: useRef(),
  };

  //go back to welcome page if clicked away
  const handleClose = () => {
    history.goBack();
  };

  //show password when icon clicked
  const handleClickShowPassword = () => {
    setValues({...values, showPassword: !values.showPassword});
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const authenticateInfo = async () => {
    const authenticationInformation = await authenticateUser(signupFormValues);
    console.log('...results returned');
    console.log(authenticationInformation);
    return authenticationInformation.status === 200;
  };

  const body = (
    <div className={classes.paper}>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          return (await authenticateInfo())
            ? history.push({
                pathname: '/search',
                response: signupFormValues.usernameRef,
              })
            : null;
        }}>
        <header className='SignupTitle'>Signup</header>
        <Grid item>
          <TextField
            id='firstName'
            inputProps={{pattern: allLetters}}
            value={firstNameValue}
            onChange={(e) => setFirstNameValue(e.target.value)}
            inputRef={signupFormValues.fNameRef}
            placeholder='First Name'
            variant='outlined'
            required
          />
          <TextField
            id='lastName'
            inputProps={{pattern: allLetters}}
            value={lastNameValue}
            onChange={(e) => setLastNameValue(e.target.value)}
            inputRef={signupFormValues.lNameRef}
            placeholder='Last Name'
            variant='outlined'
            required
          />
        </Grid>
        <TextField
          inputProps={{pattern: validEmail}}
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          id='Email address'
          inputRef={signupFormValues.emailRef}
          placeholder='Email address'
          variant='outlined'
          required
        />

        <TextField
          id='username'
          inputProps={{pattern: noWhiteSpaces}}
          inputRef={signupFormValues.usernameRef}
          value={userNameValue}
          onChange={(e) => setUserNameValue(e.target.value)}
          placeholder='Username'
          variant='outlined'
          required
        />

        <TextField
          id='password'
          inputRef={signupFormValues.passwordRef}
          type={values.showPassword ? 'text' : 'password'}
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          placeholder='Password'
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

        <TextField
          //error
          id='confirmPassword'
          inputProps={{pattern: passwordValue}}
          type='password'
          required
          placeholder='Confirm Password'
          variant='outlined'
        />
        {/*<Link to="/search" style={{textDecoration: 'none'}}>*/}

        <Styles.SubmitButtonStyled type='submit'>
          Submit
        </Styles.SubmitButtonStyled>
        {/*</Styles.FormControlSignup></Link>*/}
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
