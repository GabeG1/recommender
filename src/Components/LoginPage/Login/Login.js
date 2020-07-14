import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button'
import IconButton from "@material-ui/core/IconButton";
import './Login.css'
import * as Styles from './LoginStyles.js'



const useStyles = makeStyles((theme) => ({
    paper: {
      display: 'block',
      margin: '5% auto',
      width: 300,
      height: 400,
      backgroundColor: theme.palette.background.paper,
      borderRadius: '20px',
     // background: 'linear-gradient(to right, #9796f0, #fbc7d4)',
     // boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
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

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const body = (
        <div className={classes.paper}>
            <Styles.FormControlLogin>
                <header className="LoginTitle">
                Login
                </header>
         <TextField
        id="username"
        placeholder="Enter username"
        variant="outlined"
        />

        <TextField
        id="password"
        type={values.showPassword ? 'text' : 'password'}
        placeholder="Enter password"
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
            <Styles.SubmitButtonStyled onClick={()=>{}}>
                Submit
            </Styles.SubmitButtonStyled>
        </Styles.FormControlLogin>
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