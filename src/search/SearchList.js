import React, { useState, useEffect } from 'react';
import SearchManager from "../modules/SearchManager";
import UserCard from "../auth/UserCard";
import SearchCard from "./SearchCard";


const SearchList = (props) => {
    const [search, setSearch] = useState([]);

    const getResults = () => {
        return SearchManager.getSearchData()
        .then(results => results.json())
        .then(json => setSearch(json.results))
        // .then(dataFromAPI => {
        //     setSearch(dataFromAPI)
        // });
    };

    useEffect(() => {
        getResults();
        console.log(getResults())
      }, []);

  return (
    <>
    <main className="mainFlex">
      <section className="mainFlex__userCard">
        <UserCard />
      </section>
      <section className="mainFlex__subpage"> 
        {search.map(results =>
        <SearchCard key={results.id} results={results} {...props} />
        )}
        
      </section>
    </main>
    </>
  );
};

export default SearchList;