import React, {useReducer, createContext, useEffect} from 'react';

const initialState = JSON.parse(localStorage.getItem('loginInfo')) || {
  loggedIn: false,
};
const store = createContext(initialState);
const {Provider} = store;

const UserInfo = ({children}) => {
  const [state, dispatch] = useReducer((state, action) => {
    console.log(action);
    switch (action.loggedIn) {
      case true:
        return {loggedIn: true, userName: action.userName};
      case false: 
        return {loggedIn: false};
      default:
        throw new Error();
    }
  }, initialState);

  useEffect(() => {
    localStorage.setItem('loginInfo', JSON.stringify(state));
  }, [state]);

  return <Provider value={{state, dispatch}}>{children}</Provider>;
};

/*
    const [fName, setfName] = useState(props.location.state);
    const [lName, setlName] = useState(props.location.state);
    const [username, setUsername] = useState(props.location.state);
    const [email, setEmail] = useState(props.location.state);
    const [password, setPassword] = useState(props.location.state);
    */

export {store, UserInfo};
