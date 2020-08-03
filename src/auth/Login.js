import React, { useState } from "react"
import { Link } from "react-router-dom";
import LoginManager from "../modules/LoginManager";
import './Login.css';

const Login = props => {
  const [user, setUser] = useState({email: "", password: ""});

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...user};
    stateToChange[evt.target.id] = evt.target.value;
    setUser(stateToChange);
    
  };

    const handleLogin = (e) => {
      e.preventDefault();
      let email = document.querySelector("#email").value
      let password = document.querySelector("#password").value
      LoginManager.getAll()
      .then(users => {
        users.find(user => {
        if(user.email===email&&user.password===password) {
          // sessionStorage.removeItem('user');
          sessionStorage.setItem('user', JSON.stringify(user))
          props.setUser(user);
          props.history.push("/");
        } 
        }
        )
      })
    }


  return (
    <div className="login">
          <div className="loginLogo">
            <img src="./images/logo.png" alt="logo" />
          </div>


          <form onSubmit={handleLogin}>

            <div className="form-input">
              <input onChange={handleFieldChange} className="inputField" type="text" id="email"/>
              <span className="focus-inputField" data-placeholder="Email"></span>
            </div>

            <div className="form-input">
              <input onChange={handleFieldChange} className="inputField" type="password" id="password"/>
              <span className="focus-inputField" data-placeholder="Password"></span>
            </div>

                <button type="submit" className="login-btn">Sign in</button>

            <div className="registerAcct">
              <span className="registerAcct__text">
                Don’t have an account?
              </span>
                <Link to="/register">
                Sign Up
                </Link>
            </div>
          </form>
      </div>
  );
  };

export default Login;