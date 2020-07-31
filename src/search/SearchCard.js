import React from 'react';

const SearchCard = props => {
console.log(props.search.place_id)

    return (
        <div className="card">
             <div className="card-content">
                 <h1 className="searchCard_name">{props.search.name}</h1>
                 <p className="searchCard_name">Rating: {props.search.rating}</p>
                 {(props.search.price_level) ? 
                 <p>Price Level: {props.search.price_level} </p> : <p>Price Level: Unknown</p>
                 }
                 <button type="button" onClick={() => 
                props.history.push(`/search/${props.search.place_id}`)}> 
                More Details </button>
             </div>
      </div>
    )
}

export default SearchCard;