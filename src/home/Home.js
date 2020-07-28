import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import './home.css';
import UserCard from '../auth/UserCard';



const Home = () => {
    return (
      <>
        <main className="mainFlex">
          <section className="mainFlex__userCard">
              <UserCard />
          </section>
          <div className="homeContainer">
            <div className="logo">
              <img src={('./images/logo.png')} alt='logo' />
            </div>
              <h1 className="homeHeader">Welcome to your Decisive Friend</h1>
          </div>
        </main>
    </>
  );
};


export default Home;