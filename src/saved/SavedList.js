import React, { useState, useEffect } from 'react';
import SearchManager from "../modules/SearchManager";
import UserCard from "../auth/UserCard";
import SavedCard from "./SavedCard";



const SavedList = (props) => {
  const [saved, setSaved] = useState([]);

  const getSaved = () => {
    return SearchManager.getAllRestaurants().then(response => {
        let user=sessionStorage.getItem('user');
        let user_id=JSON.parse(user).id
        console.log(user_id)
        setSaved(response)
        console.log(response)
    })
  }
  const deleteRestaurant = id => {
    SearchManager.delete(id)
    .then(() => getSaved());
  };

  useEffect(() => {
    getSaved()
  }, []);

  return (
    <>
    <main className="mainFlex">
      <section className="mainFlex__userCard">
        <UserCard />
      </section>
      <section className="mainFlex__subpage"> 
        <div className="results">
          {saved.map(saved =>
          <SavedCard 
          key={saved.id} 
          saved={saved} 
          deleteRestaurant={deleteRestaurant} 
          {...props}/>
          )}
        </div>
      </section>
    </main>
  </>
  );
};

export default SavedList;