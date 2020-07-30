import React, { useState, useEffect } from 'react';
import SearchManager from "../modules/SearchManager";
import UserCard from "../auth/UserCard";
import SearchCard from "./SearchCard";

// let destination="";
// let radius="";

const SearchList = (props) => {
    const [search, setSearch] = useState({});

    // const getResults = (destination, radius) => {
    //     return SearchManager.getSearchData(destination, radius)
    //     .then(json => setSearch(json.results))
    // };

    // const handleFieldChange = evt => {
    //     const stateToChange = { ...search }
    //     stateToChange[evt.target.id] = evt.target.value
    //     setSearch(stateToChange)
    //   };

    // const constructNewSearch = evt => {
    //     evt.preventDefault();
    //     setIsLoading(true);
    //     SearchManager.
    // }


    const getResults = () => {
        return SearchManager.getRandomResult()
        .then(json => {
            console.log(json.results)
            const randomIndex = Math.floor(Math.random()* json.results.length);
            const randomResult = json.results[randomIndex];
            console.log(randomResult)
            setSearch(randomResult)
            // setSearch(randomResult)
            // return([randomResult])
        })
    }

    useEffect(() => {
        // getResults(destination, radius);
        getResults()
        console.log(getResults())
      }, []);

  return (
    <>
    <main className="mainFlex">
      <section className="mainFlex__userCard">
        <UserCard />
      </section>
      <section className="mainFlex__subpage"> 
        <div className="searchField">
            
        </div>
        <div className="results">
        {(search.id) ?
        <SearchCard search={search} {...props} /> : 
        null
        }
        </div>
      </section>
    </main>
    </>
  );
};

export default SearchList;