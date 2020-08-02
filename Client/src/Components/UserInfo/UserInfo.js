import React, {useState, useEffect, useRef, useContext} from 'react';
import withMemo from '../withMemo';
import App from '../App/App'

function UserInfo(props) {
const userField = useContext(App.userContext)
    const [fName, setfName] = useState(props.location.state);
    const [lName, setlName] = useState(props.location.state);
    const [username, setUsername] = useState(props.location.state);
    const [email, setEmail] = useState(props.location.state);
    const [password, setPassword] = useState(props.location.state);
  return (<div>{console.log(userField)}
      </div> );
}
    
    export default withMemo(UserInfo, []);