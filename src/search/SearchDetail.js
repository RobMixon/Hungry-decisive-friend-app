import React, { useState, useEffect } from "react";
import SearchManager from "../modules/SearchManager";
import UserCard from '../auth/UserCard';
// import "./SearchDetail.css";

const SearchDetail = props => {
  const [search, setSearch] = useState({place_id: props.place_id ,name: ""});

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    SearchManager.getDetail(search.place_id).then(response => {
        console.log(response)
      setSearch({
        name: response.name,
      });
    });
  }, [search.place_id]);

  return (
    <div className="card">
      <div className="card-content">
      <UserCard />
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{search.name}</span>
        </h3>
      </div>
    </div>
  )
}

export default SearchDetail;