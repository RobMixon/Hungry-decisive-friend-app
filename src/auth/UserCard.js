import React, { useState } from 'react';
import NavBar from "../nav/NavBar";


const UserCard = props => {
  
  // const isAuthenticated = () => sessionStorage.getItem("user") !== null;
  const sessionUser = JSON.parse(sessionStorage.getItem("user"))
  
  const clearUser = () => {
    sessionStorage.clear()
    setHasUser(sessionUser)
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