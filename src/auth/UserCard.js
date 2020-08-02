import React, { useState } from 'react';
import NavBar from "../nav/NavBar";
import {Redirect } from "react-router-dom";


const UserCard = () => {
  
  // const isAuthenticated = () => sessionStorage.getItem("user") !== null;
  const sessionUser = JSON.parse(sessionStorage.getItem("user"))
  
  const clearUser = () => {
    sessionStorage.clear()
    setHasUser(sessionUser)
    return <Redirect to ="/login"></Redirect>
  }
  
  const [hasUser, setHasUser] = useState(sessionUser !== null);
  

  return (
    <div className="userContainer">
      <div className="navBar">
        <NavBar hasUser={hasUser} clearUser={clearUser} />
      </div>
    </div>
)}


export default UserCard;