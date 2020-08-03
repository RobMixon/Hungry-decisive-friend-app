import React, { useState } from 'react';
import NavBar from "../nav/NavBar";
import {Redirect } from "react-router-dom";

const UserCard = () => {
  const sessionUser = JSON.parse(sessionStorage.getItem("user"))
  const [hasUser, setHasUser] = useState(sessionUser !== null);

  const clearUser = () => {
    sessionStorage.clear()
    setHasUser(sessionUser)
    return <Redirect to ="/login"></Redirect>
  }
  
  return (
    <div className="userContainer">
      <div className="navBar">
        <NavBar hasUser={hasUser} clearUser={clearUser} />
      </div>
    </div>
  )
}

export default UserCard;