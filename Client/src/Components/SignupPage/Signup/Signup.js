import React, {useRef} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Link
} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import './Signup.css'
import * as Styles from './SignupStyles.js'
import {Search} from "../../SearchPage/Search/Search";


const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'block',
        margin: '5% auto',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        borderRadius: '10px',
        maxHeight: '60%',
        overflow: 'auto',
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
        }
    },
}));

export default function Login(props) {
    const [values, setValues] = React.useState({
        showPassword: false,
    });
    const history = useHistory();
    const classes = useStyles();
    const fNameRef = useRef();
    const lNameRef = useRef();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const handleClose = () => {
        history.goBack();
    };


    const handleClickShowPassword = () => {

        setValues({...values, showPassword: !values.showPassword});
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const sendFormToAuth = () => {
        console.log("inAuthMethod")
        console.log(fNameRef.current)
    };

    const body = (
        <div className={classes.paper}>
            <form onSubmit={sendFormToAuth}>
                <header className="SignupTitle">
                    Signup
                </header>
                <Grid item>
                    <TextField
                        id="firstName"
                        inputRef={fNameRef}
                        placeholder="First Name"
                        variant="outlined"
                        required
                        />
                    <TextField
                        id="lastName"
                        inputRef={lNameRef}
                        placeholder="Last Name"
                        variant="outlined"
                        required/>
                </Grid>
                <TextField
                    id="Email address"
                    inputRef={emailRef}
                    placeholder="Email address"
                    variant="outlined"
                    required/>

                <TextField
                    id="username"
                    inputRef={usernameRef}
                    placeholder="Username"
                    variant="outlined"
                    required/>

                <TextField
                    id="password"
                    inputRef={passwordRef}
                    type={values.showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    variant="outlined"
                    filled="true"
                    required
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}/>

                <TextField
                //error
                    id="confirmPassword"
                    inputRef={passwordConfirmRef}
                    type="password"
                    required
                   // error
                    //label="password"
                    //isRequired="true"
                    //helperText="Must enter password"
                    placeholder="Confirm Password"
                    variant="outlined"
                />
                {/*<Link to="/search" style={{textDecoration: 'none'}}>*/}

                    <Styles.SubmitButtonStyled type="submit">
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
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                border={0}
            >
                {body}
            </Modal>
        </div>
    );
}
