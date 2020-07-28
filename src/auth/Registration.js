import React, {useState} from "react";
import { Link } from "react-router-dom";
import LoginManager from "../modules/LoginManager";
import './Login.css';


const Register = props => {
const [user, setUser] = useState({ email:"", password:"", image: ""})
const [isLoading, setIsLoading]= useState(false);

const handleFieldChange = evt => {
  const stateToChange = { ...user };
  stateToChange[evt.target.id] = evt.target.value;
  setUser(stateToChange);
};

const constructNewUser = evt => {
  evt.preventDefault();
  let password2= document.querySelector("#password2").value
  if(user.email===""||user.password===""){
    window.alert("Please fill all fields out before creating a new account")
  } else if (user.password!== password2) {
    window.alert("Your password does not match")
  } else {
    console.log(user, "it works")
    user.image = "./userIcon-black.png"
    setIsLoading(true);
    sessionStorage.setItem("user", JSON.stringify(user))
    props.setUser(user)
    LoginManager.post(user)
    .then(()=>props.history.push("/"));
  }
};

  return (
        <div className="loginBox">
          <div className="loginLogo">
            <img src="./images/logo.png" alt="logo" />
          </div>


          <form>

            <div className="form-input">
              <input className="inputField" type="text" required onChange={handleFieldChange} id="email"/>
              <span className="focus-inputField" data-placeholder="Email"></span>
            </div>

            <div className="form-input">
              <input className="inputField" type="password" required onChange={handleFieldChange} id="password"/>
              <span className="focus-inputField" data-placeholder="Password"></span>
            </div>

            <div className="form-input">
              <input className="inputField" type="password" id="password2"/>
              <span className="focus-inputField" data-placeholder="Password Confirm"></span>
            </div>

            <div className="container-login-form-btn">
              <div className="wrap-login-form-btn">
                <div className="login-form-bgbtn"></div>
                <button type="submit" className="login-form-btn" disabled={isLoading}
                onClick={constructNewUser}>
                  Create Account
                </button>
              </div>
            </div>

            <div className="registerAcct">
              <span className="registerAcct__text">
                Already have an account?
              </span>
                <Link to="/login">
                  Sign In
                </Link>
            </div>
          </form>
        </div>

  );
};

export default Register;