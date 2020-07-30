import React from 'react';

const SearchCard = props => {
    return (
        <div className="card">
             <div className="card-content">
             
                 <p>{props.search.name}</p>
                 <p>{props.search.icon}</p>
                 <p>{props.search.opening_hours.open_now}</p>
                 <p>{props.search.place_id}</p>
                 <p>{props.search.rating}</p>
                 <p>{props.search.price_level}</p>
             </div>
      </div>
    )
}

    // const constructNewSearch = evt => {
    //     evt.preventDefault();
    //     let destination=document.querySelector("#destination").value;
    //     let radius=document.querySelector("#radius").value;

    //     if (destination==="" || radius==="") {
    //       window.alert("Please input a location and search radius");
    //     } else {
    //       setIsLoading(true);
    //       return SearchManager.getSearchData()
    //       .then((response) => {
    //             setSearch(response)
    //             .then(props.history.push("/results/new"))
    //             // let randomizer = results[Math.floor(Math.random()*results.length)]
    //             console.log(response)
    //         }
    //     )
    //     }
    //   };



export default SearchCard;