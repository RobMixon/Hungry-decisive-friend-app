import React, { useState, useEffect } from "react"
import SearchManager from "../modules/SearchManager";
import UserCard from "../auth/UserCard";
import './Saved.css';

const SavedEditForm = props => {
  const [saved, setSaved] = useState({name:"",comment:""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...saved };
    stateToChange[evt.target.id] = evt.target.value;
    setSaved(stateToChange);
  };

  const updateExistingPlace = evt => {
    evt.preventDefault()
    setIsLoading(true);
    const editedPlace = {
        name:saved.name,
        place_id:saved.place_id,
        user_id:saved.user_id,
        comment: saved.comment,
        id: saved.id
      };
    SearchManager.update(editedPlace)
    .then(() => props.history.push("/saved"))
  }

  useEffect(() => {
    SearchManager.getPlace(props.match.params.placeId)
    .then(result => {
      setSaved(result)
      setIsLoading(false)
  });
  }, []);

  return (
    <div className="savedEdit">
      <section className="savedFlex__userCard">
        <UserCard />
      </section>
      <div className="savedEdit_content">
      <h1>{saved.name}</h1>
      <form>
        <fieldset className="saved_fieldset">
        Comment:
          <input
            type="text"
            className="savedEdit_form"
            onChange={handleFieldChange}
            id="comment"
            value={saved.comment}/>
          <label htmlFor="name"></label>
          <button
            type="button" disabled={isLoading}
            onClick={updateExistingPlace}
            className="editForm_button">
            Submit Changes?
          </button>
        </fieldset>
      </form>
      </div>
    </div>
  )
}

export default SavedEditForm;