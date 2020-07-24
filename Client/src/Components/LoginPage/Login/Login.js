import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';
import { Search } from '../../SearchPage/Search/Search';
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
import { Welcome } from '../../WelcomePage/Welcome/Welcome';

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
  },
}));

export default function Login(props) {
  let { path, url } = useRouteMatch();
  const history = useHistory();
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleClose = () => {
    history.goBack();
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
        <header className="LoginTitle">Login</header>
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
            ),
          }}
        />

        <Link to="/search" style={{ textDecoration: 'none' }}>
          <Styles.SubmitButtonStyled>Submit</Styles.SubmitButtonStyled>
        </Link>
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
