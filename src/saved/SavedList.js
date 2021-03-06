import React, { useState, useEffect, useHistory } from 'react';
import SearchManager from "../modules/SearchManager";
import UserCard from "../auth/UserCard";
import SavedCard from "./SavedCard";
import './Saved.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


const SavedList = (props) => {
  const [saved, setSaved] = useState([]);
  const [typeResult, setTypeResult] = useState([]);

  const handleSelect = (e) => {
    let filteredByType = saved.filter(place => place.type === e)
    setTypeResult(filteredByType)
  }

  const getSaved = () => {
    return SearchManager.getAllPlaces().then(response => {
      let user = sessionStorage.getItem('user');
      let user_id = JSON.parse(user).id
      let filteredByUser = response.filter(place => place.user_id === user_id)
      setSaved(filteredByUser)
    })
  }

  const deletePlace = id => {
    SearchManager.delete(id)
      .then(() => window.location.reload());
  };

  useEffect(() => {
    getSaved()
  }, []);

  return (
    <>
      <main className="savedList">
        <section className="savedFlex__userCard">
          <UserCard />
        </section>
        <div>
          <DropdownButton
            title="Type of Place"
            id="dropdown-menu"
            className="savedDropDown_button"
            onSelect={handleSelect}
          >
            <div className="dropDown_box">
              <Dropdown.Item className="dropDown_item" eventKey="">All Places</Dropdown.Item>
              <Dropdown.Divider />
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
        <section className="savedList__subpage">
          <div className="results">
            {(typeResult.length > 0) ? typeResult.map(saved =>
              <SavedCard
                key={saved.id}
                saved={saved}
                deletePlace={deletePlace}
                {...props} />)
              : saved.map(saved =>
                <SavedCard
                  key={saved.id}
                  saved={saved}
                  deletePlace={deletePlace}
                  {...props} />)
            }
          </div>
        </section>
      </main>
    </>
  );
};

export default SavedList;