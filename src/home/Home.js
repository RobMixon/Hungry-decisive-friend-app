import React from "react";
import { Link } from "react-router-dom";



const Home = () => {
    return (
      <>
        <main className="homeContainer">
          <div className="homeContainer-contents">
          <section className="homeHeader">
            <img className="logo" src={('./images/logo.png')} alt='logo' />
            <h1>Welcome to your Decisive Friend</h1>
          </section>
          </div>
      </main>
    </>
  );
};


export default Home;