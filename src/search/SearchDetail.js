import React, { useState, useEffect } from "react";
import SearchManager from "../modules/SearchManager";
import UserCard from '../auth/UserCard';
import SearchCard from "./SearchCard";
// import "./SearchDetail.css";

const SearchDetail = props => {
  const [search, setSearch] = useState({place_id: props.place_id});
  const [result, setResult] = useState({name:"", formatted_address:"", rating:""})


  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    SearchManager.getDetail(props.place_id).then(results => {
        let randomResult = results.result
      setResult(randomResult);
    });
  }, []);

  


  return (
    <div className="card">
      <div className="card-content">
      <UserCard />
        <h3>
        <div className="results">
    <p>Name: {result.name}</p>
        </div>
        </h3>
      </div>
    </div>
  )
}

export default SearchDetail;