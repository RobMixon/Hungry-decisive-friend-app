import React  from "react";
import './home.css';
import UserCard from '../auth/UserCard';



const Home = () => {
    return (
      <>
          <header className="mainFlex__userCard">
              <UserCard />
        </header>

          <div className="homeContainer">
            <div className="logo">
              <img src={('./images/logo.png')} alt='logo' />
            </div>
              <h1 className="homeHeader">Welcome to your Decisive Friend</h1>
          </div>
    </>
  );
};


export default Home;