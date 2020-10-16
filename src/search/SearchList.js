import React, { useState, UseHistory } from 'react';
import SearchManager from "../modules/SearchManager";
import UserCard from "../auth/UserCard";
import SearchCard from "./SearchCard";
import './Search.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const SearchList = (props) => {
  const [search, setSearch] = useState({});
  const [value, setValue] = useState('');

  const handleSelect = (e) => {
    setValue(e)
  }

  const getResults = (evt,) => {
    evt.preventDefault()
    let destination = document.querySelector("#destination").value;
    let radius = (document.querySelector("#radius").value);
    let type = value;
    if (destination === "" || type === "") {
      window.alert("Please fill out current Location and select a Type")
    } else {
      return SearchManager.getRandomResult(destination, radius, type)
        .then(json => {
          if (json.results !== undefined) {
            const randomIndex = Math.floor(Math.random() * json.results.length);
            const randomResult = json.results[randomIndex];
            setSearch(randomResult)
          } else {
            window.alert("We apologize but the heroku proxy server is on a coffee break at the moment")
          }
        })
    }
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
                  placeholder="Zipcode"
                />
            Radius:
            <input
                  type="text"
                  id="radius"
                  placeholder="Meters or Leave blank"
                />
            Type:
            <DropdownButton
                  title="Type of Place"
                  id="dropdown-menu"
                  className="dropDown_button"
                  onSelect={handleSelect}
                >
                  <div className="dropDown_box">
                    <Dropdown.Item className="dropDown_item" eventKey="restaurant">Restaurant</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="dropDown_item" eventKey="bar">Bar</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="dropDown_item" eventKey="book_store">Book Store</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="dropDown_item" eventKey="cafe">Cafe</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="dropDown_item" eventKey="library">library</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="dropDown_item" eventKey="museum">Museum</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="dropDown_item" eventKey="tourist_attraction">Tourist Attraction</Dropdown.Item>
                  </div>
                </DropdownButton>
              </div>
              <div className="searchButton_box">
                <button
                  className="searchButton"
                  type="button"
                  onClick={getResults}
                >Get a Random Place!</button>
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