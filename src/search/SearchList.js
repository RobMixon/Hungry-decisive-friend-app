import React, { useState } from 'react';
import SearchManager from "../modules/SearchManager";
import UserCard from "../auth/UserCard";
import SearchCard from "./SearchCard";
import './Search.css';

const SearchList = (props) => {
  const [search, setSearch] = useState({});

  const getResults = evt => {
    evt.preventDefault()
    let destination = document.querySelector("#destination").value;
    let radius = (document.querySelector("#radius").value) ;
    if(destination === "") {
      window.alert("Please fill out current Location and Search Radius")
    } else {
    return SearchManager.getRandomResult(destination, radius)
    .then(json => {
      const randomIndex = Math.floor(Math.random()* json.results.length);
      const randomResult = json.results[randomIndex];
      console.log(randomResult)
      setSearch(randomResult)
    })}
  }

  return (
    <>
    <main className="searchFlex">
      <section className="searchFlex__userCard">
        <UserCard />
      </section>
      <section className="searchFlex__subpage"> 

        <form>
        <fieldset className="search_fieldset">
          <div className="formgrid">
          Current Location: 
            <input
              type="text"
              id="destination"
              placeholder="Zipcode or Address"
            />
            Radius: 
            <input
              type="text"
              id="radius"
              placeholder="Meters or Leave blank"
            />
          </div>
          <div className="searchButton_box">
            <button 
              className="searchButton"
              type="button"
              onClick={getResults}
            >Get a Restaurant</button>
          </div>
        </fieldset>
      </form>
        <div className="results">
        {(search.name) ?
        <SearchCard search={search} {...props} /> : 
        null}
        </div>
      </section>
    </main>
    </>
  );
};

export default SearchList;