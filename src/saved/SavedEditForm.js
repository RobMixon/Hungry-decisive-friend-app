import React, { useState, useEffect } from "react"
import SearchManager from "../modules/SearchManager";
import UserCard from "../auth/UserCard";

const SavedEditForm = props => {
    const [saved, setSaved] = useState({name:"",comment:""});
    const [isLoading, setIsLoading] = useState(false);
    console.log(props, "props")


    const handleFieldChange = evt => {
        const stateToChange = { ...saved };
        stateToChange[evt.target.id] = evt.target.value;
        setSaved(stateToChange);
      };

      const updateExistingRestaurant = evt => {
        evt.preventDefault()
        setIsLoading(true);
        const editedRestaurant = {
            id: saved.id,
            name: saved.name,
            comment: saved.comment
          };
    SearchManager.update(editedRestaurant)
    .then(() => props.history.push("/saved"))
}

useEffect(() => {
    SearchManager.getRestaurant(props.match.params.restaurantId)
      .then(result => {
          setSaved(result)
          setIsLoading(false)
          console.log(result,"saved")
        })
      ;
  }, []);

    return (
<div className="card">
      <div className="card-content">
        <UserCard />
      </div>
      <h1>{saved.name}</h1>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="comment"
              value={saved.comment}
            />
            <label htmlFor="name"></label>
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingRestaurant}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
      </div>
    )
}

export default SavedEditForm;