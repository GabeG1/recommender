import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid'
import IconButton from "@material-ui/core/IconButton";
import './Signup.css'
import * as Styles from './SignupStyles.js'



const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'block',
        margin: '5% auto',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        borderRadius: '10px',
        // background: 'linear-gradient(to right, #9796f0, #fbc7d4)',
        // boxShadow: theme.shadows[5],
        maxHeight: 400,
        overflow: 'hidden',
        padding: theme.spacing(2, 1, 3),
        outline: 'none'
    },
}));

export default function Login(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });


    const handleClose = () => {
        props.onClose();
    };


    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const body = (
        <div className={classes.paper}>
            <Styles.FormControlSignup>
                <header className="SignupTitle">
                    Signup
                </header>
                <Grid item>
                    <TextField
                        id="firstName"
                        placeholder="First Name"
                        variant="outlined" />
                    <TextField
                        id="lastName"
                        placeholder="Last Name"
                        variant="outlined" />
                </Grid>
                <TextField
                    id="Email address"
                    placeholder="Email address"
                    variant="outlined" />

                <TextField
                    id="username"
                    placeholder="Username"
                    variant="outlined" />

                <TextField
                    id="password"
                    type={values.showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    variant="outlined"
                    filled="true"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }} />

                <TextField
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    variant="outlined"
                />

                <Styles.SubmitButtonStyled onClick={() => { }}>
                    Submit
            </Styles.SubmitButtonStyled>
            </Styles.FormControlSignup>
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
