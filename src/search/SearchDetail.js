import React, { useState, useEffect } from "react";
import SearchManager from "../modules/SearchManager";
import UserCard from '../auth/UserCard';

// import "./SearchDetail.css";

const SearchDetail = props => {
//   const [search, setSearch] = useState({place_id: props.place_id});
  const [result, setResult] = useState({name:"", formatted_address:"", rating:"",formatted_phone_number:"",website:""})


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
        </div>
        <div className="results">
            <h1>{result.name}</h1>
            <p>Rating: {result.rating}</p>
            <p> {result.formatted_address}</p>
            <p>{result.formatted_phone_number}</p>
            <p>{result.website}</p>
        </div>
        <div className="save_results">
        <button type="button" className="btn"
        onClick={() => {props.history.push("/saved/new")}}>
        Save Restuarant
        </button>
        </div>
    </div>
  )
}

export default SearchDetail;