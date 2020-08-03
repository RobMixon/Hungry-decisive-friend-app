import React, { useState, useEffect } from "react";
import SearchManager from "../modules/SearchManager";
import UserCard from '../auth/UserCard';

// import "./SearchDetail.css";

const SearchDetail = props => {
  const [search, setSearch] = useState({name:"", place_id:"",user_id:null, comment:""});
  const [result, setResult] = useState({name:"", formatted_address:"", rating:"",formatted_phone_number:"",website:"",place_id:""})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    SearchManager.getDetail(props.place_id).then(results => {
    let randomResult = results.result
    let user=sessionStorage.getItem('user');
    let user_id=JSON.parse(user).id
    let comment=document.querySelector("#comment").value
    let nameAndId = {name:`${randomResult.name}`, place_id:`${randomResult.place_id}`,user_id, comment:`${comment}`}
      setResult(randomResult);
      setSearch(nameAndId);
    });
  }, [props.place_id]);

  const handleFieldChange = evt => {
    const stateToChange = { ...search };
    stateToChange[evt.target.id] = evt.target.value;
    setSearch(stateToChange);
  };

  const constructNewRestaurant = evt => {
    evt.preventDefault();
    setIsLoading(true);

    // Create the restaurant and redirect user to saved  page
    SearchManager.postRestaurant(search)
      .then(() => props.history.push("/saved"));
  };

  return (
    <div className="card">
      <div className="card-content">
        <UserCard />
      </div>
      <div className="results" value={result.place_id}>
          <h1>{result.name}</h1>
          <p>Rating:{result.rating}</p>
          <p>{result.formatted_address}</p>
          <p>{result.formatted_phone_number}</p>
          <p>{result.website}</p>
          <form>
            <textarea 
              rows="4" 
              cols="50" 
              name="comment" 
              form="usrform" 
              id="comment"
              placeholder="Enter Comments Here"
              onChange={handleFieldChange}
              value={search.comment}>
            </textarea>
          </form>
      </div>
      <div className="save_results">
      <button 
        type="button" 
        className="btn" 
        disabled={isLoading}
        onClick={constructNewRestaurant}>
        Save Restuarant
      </button>
      </div>
    </div>
  )
}

export default SearchDetail;