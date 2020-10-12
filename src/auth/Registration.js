import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginManager from "../modules/LoginManager";
import './Login.css';


const Register = props => {
  const [user, setUser] = useState([])
  const [info, setInfo] = useState({ email: "" })
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...info };
    stateToChange[evt.target.id] = evt.target.value;
    setInfo(stateToChange);
  };

  const getUsers = () => {
    LoginManager.getAll().then((response) => {
      setUser(response.map(result => ({ email: result.email })))
    })
  }

  const checkEmail = () => {
    let check = user.some((response) => response.email === info.email)
    return check
  }

  const constructNewUser = evt => {
    evt.preventDefault();

    if (info.email === "" || info.password === "") {
      window.alert("Please fill all fields out before creating a new account")
    } else if (checkEmail()) {
      window.alert("The email already has an account, please sign in to your account")
    } else {
      setIsLoading(true);
      sessionStorage.setItem("user", JSON.stringify(info))
      props.setUser(info)
      LoginManager.post(info)
        .then(() => props.history.push("/login"));
    }
  };

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="loginBox">
      <div className="loginLogo">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <form>
        <div className="form-input">
          <input
            className="inputField"
            type="text"
            required onChange={handleFieldChange}
            id="email" />
          <span
            className="focus-inputField"
            data-placeholder="Email">
          </span>
        </div>
        <div className="container-login-form-btn">
          <div className="wrap-login-form-btn">
            <div className="login-form-bgbtn"></div>
            <button
              type="submit"
              className="login-form-btn"
              disabled={isLoading}
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