import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './HomePage'
import { useEffect, useState } from 'react';
import apiService from './AppService';

function Login({productName, updateLoginResult}) {

  // const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [currentUser, setCurrentUser] = useState({})
  const [loginError, setLoginError] = useState('')

  let login = () => {
    // setLoggedIn(true);
    apiService.login(email, password)
    .then(result => {
      if (result.status) {
        console.log("login succeeded", result);
        // setLoggedIn(true);
        // setCurrentUser({firstName: result.firstName, lastName: result.lastName});
        // setLoginError('');
        updateLoginResult(result.firstName, result.lastName)
      } else {
        console.log("login failed", result);
        setLoginError("Invalid Email or Password");
      }
    })
    .catch(err => {
      console.log("error occured")
      setLoginError("error occured");
    })
  }

  return (
    <div>
      <div className="App">
        <div className={'mainContainer'}>
          <div className={'titleContainer'}>
            <div>Login for {productName}</div>
            <label className="errorLabel">{loginError}</label>
          </div>
          <br />
          <div className={'inputContainer'}>
            <input
              value={email}
              placeholder="Enter your email here"
              onChange={(ev) => setEmail(ev.target.value)}
              className={'inputBox'}
            />
            {/* <label className="errorLabel">{emailError}</label> */}
          </div>
          <br />
          <div className={'inputContainer'}>
            <input
              value={password}
              placeholder="Enter your password here"
              onChange={(ev) => setPassword(ev.target.value)}
              className={'inputBox'}
            />
            {/* <label className="errorLabel">{passwordError}</label> */}
          </div>
          <br />
          <div className={'inputContainer'}>
            <input className={'inputButton'} type="button" onClick={login} value={'Log in'} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;
