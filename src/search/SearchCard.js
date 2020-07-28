import React from "react";
import { Link } from "react-router-dom";

const SearchCard = props => {
    return (
        <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-petname">
            {props.animal.name}
          </span></h3>
          <p>Breed: {props.animal.breed}</p>
          <button type="button"
            onClick={() => props.history.push(`/animals/${props.animal.id}/edit`)}>
            Edit
          </button>
        </div>
      </div>
    )
}