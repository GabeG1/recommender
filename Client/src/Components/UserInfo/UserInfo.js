import React, {useReducer, createContext} from 'react';

const initialState = {loggedIn: false};
const store = createContext(initialState);
const {Provider} = store;

const UserInfo = ({children}) => {
  const [state, dispatch] = useReducer((state, action) => {
    console.log(action);
    switch (action.loggedIn) {
      case true:
        return {loggedIn: true, userName: action.userName};
      default:
        throw new Error();
    }
  }, initialState);

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
