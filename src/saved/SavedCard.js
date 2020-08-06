import React from 'react';

const SavedCard = props => {
  return (
    <div className="card">
      <div className="card-content" >
        <h1 className="savedCard_name">
          {props.saved.name}
        </h1> 
        <p>
          {props.saved.comment}
        </p>
        <button 
          className="saved_button"
          type="button" 
          onClick={() => 
          props.history.push(`/saved/${props.saved.place_id}`)}> 
          More Details 
        </button>
          {props.deletePlace && 
        <button 
          className="saved_button"
          type="button" 
          onClick={() => props.deletePlace(props.saved.id)}>
          Delete Place
        </button>}
        <button 
          className="saved_button"
          type="button"
          onClick={() => props.history.push(`/saved/${props.saved.id}/edit`)}>
          Edit Comment?
        </button>
      </div>
    </div>
  )
}

export default SavedCard;