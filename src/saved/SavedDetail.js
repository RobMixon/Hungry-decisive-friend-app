import React, { useState, useEffect } from "react";
import SearchManager from "../modules/SearchManager";
import UserCard from '../auth/UserCard';

const SavedDetail = props => {
    const [result, setResult] = useState({name:"", formatted_address:"", rating:"",formatted_phone_number:"",website:"",place_id:"", comment:""})

    const getDetails = () => {
        SearchManager.getDetail(props.place_id).then(results => {
            setResult(results.result)
            console.log(results,"results")
        })
    }

useEffect(() => {
  getDetails()
  }, []);

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
        <p>{result.comment}</p>
      </div>
    </div>
  )
    }
    
    export default SavedDetail;