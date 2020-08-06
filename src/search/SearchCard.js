import React from 'react';
import './Search.css';

const SearchCard = props => {

    return (
        <div className="card">
             <div className="card-content">
                <h1 className="searchCard_name">
                    {props.search.name}
                </h1>
                <p className="searchCard_name">
                    Rating: {props.search.rating}
                </p>
                    {(props.search.price_level) ? <p>Price Level (1 = cheap to 4 = Bougey) : {props.search.price_level} </p> : <p>Price Level(1 = inexpensive to 4 = Bougey): Unknown
                </p>}
                <button 
                    className="searchDetail_button"
                    type="button" 
                    onClick={() =>props.history.push(`/search/${props.search.place_id}`)}> 
                    More Details 
                </button>
             </div>
        </div>
    )
}

export default SearchCard;