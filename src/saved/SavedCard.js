import React from 'react';

const SavedCard = props => {
    console.log(props, "props")
    return (
        <div className="card">
             <div className="card-content" >
                 <h1 className="savedCard_name">{props.saved.name}</h1> 
                 <p>{props.saved.comment}</p>
                 <button type="button" onClick={() => 
                props.history.push(`/saved/${props.saved.place_id}`)}> 
                More Details </button>
             </div>
      </div>

    )
}

export default SavedCard;