import React, { useState, useEffect } from "react";
import SearchManager from "../modules/SearchManager";
import UserCard from '../auth/UserCard';
import './Search.css';

// import "./SearchDetail.css";

const SearchDetail = props => {
  const [search, setSearch] = useState({name:"", place_id:"",user_id:null, comment:""});
  const [result, setResult] = useState({name:"", formatted_address:"", rating:"",formatted_phone_number:"",website:"",place_id:"",type:""})
  const [isLoading, setIsLoading] = useState(false)
  console.log(props)

  useEffect(() => {
    SearchManager.getDetail(props.place_id).then(results => {
    let randomResult = results.result
    let user=sessionStorage.getItem('user');
    let user_id=JSON.parse(user).id
    let comment=document.querySelector("#comment").value
    let nameAndId = {name:`${randomResult.name}`, place_id:`${randomResult.place_id}`,user_id, comment:`${comment}`, type:`${randomResult.types[0]}`}
      setResult(randomResult);
      setSearch(nameAndId);
    });
  }, [props.place_id]);

  const handleFieldChange = evt => {
    const stateToChange = { ...search };
    stateToChange[evt.target.id] = evt.target.value;
    setSearch(stateToChange);
  };

  const constructNewPlace = evt => {
    evt.preventDefault();
    setIsLoading(true);
    // Create the restaurant and redirect user to saved  page
    SearchManager.postPlace(search)
      .then(() => props.history.push("/saved"));
  };

  return (
    <div className="searchDetail_card">
      <section className="searchFlex__userCard">
        <UserCard />
      </section>
      <div className="searchDetail_results" value={result.place_id}>
          <h1>{result.name}</h1>
          <p>Rating: {result.rating}</p>
          <p>{result.formatted_address}</p>
          <p>{result.formatted_phone_number}</p>
          <p>{result.website}</p>
          <form>
            <textarea 
              className="comment_box"
              rows="4" 
              cols="50" 
              name="comment" 
              form="usrform" 
              id="comment"
              placeholder="What did you think?"
              onChange={handleFieldChange}
              value={search.comment}>
            </textarea>
          </form>
      </div>
      <div className="save_results">
      <button 
        className="saveResult_button"
        type="button" 
        disabled={isLoading}
        onClick={constructNewPlace}>
        Love it? Save it!
      </button>
      </div>
    </div>
  )
}

export default SearchDetail;