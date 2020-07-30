import React, { useState } from 'react';
import SearchManager from "../modules/SearchManager";
import UserCard from "../auth/UserCard";
import SearchCard from "./SearchCard";



const SearchList = (props) => {
    const [search, setSearch] = useState({});

    const getResults = () => {
        let destination = document.querySelector("#destination").value;
        let radius = (document.querySelector("#radius").value) ;
        if(destination === ""||radius === "") {
            window.alert("Please fill out current Location and Search Radius")
        } else {
        return SearchManager.getRandomResult(destination, radius)
        .then(json => {
            console.log(json.results)
            const randomIndex = Math.floor(Math.random()* json.results.length);
            const randomResult = json.results[randomIndex];
            console.log(randomResult)
            setSearch(randomResult)
        
        })}
    }

  return (
    <>
    <main className="mainFlex">
      <section className="mainFlex__userCard">
        <UserCard />
      </section>
      <section className="mainFlex__subpage"> 
        <div className="searchField">
        <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              id="destination"
              placeholder="Current Location"
            />
            <label htmlFor="destination"></label>
            <input
              type="text"
              id="radius"
              placeholder="Radius"
            />
            <label htmlFor="radius"></label>
          </div>
          <div className="searchButton">
            <button
              type="button"
              onClick={getResults}
            >Get a Restaurant</button>
          </div>
        </fieldset>
      </form>
        </div>
        <div className="results">
        {(search.id) ?
        <SearchCard search={search} {...props} /> : 
        null}
        </div>
      </section>
    </main>
    </>
  );
};

export default SearchList;