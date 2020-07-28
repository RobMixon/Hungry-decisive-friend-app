import React, { useState, useEffect } from 'react';
import SearchCard from './SearchCard';
import SearchManager from "../modules/SearchManager";
import UserCard from "../auth/UserCard";


const SearchList = (props) => {

    const [search, setSearch] = useState([]);

  return (
    <>
    <main className="mainFlex">
      <section className="mainFlex__userCard">
        <UserCard />
      </section>
      <section className="mainFlex__subpage">
        <div className="postArticle__button">
          <button type="button"
              className="wideBlueBtn"
              onClick={() => {props.history.push("/articles/new")}}>
              Post New Article
          </button>
        </div>
        <div className="articleContainer-cards">
          {search.map(search => 
            <SearchCard 
              key={article.id} 
              article={article}
              deleteArticle={deleteArticle} 
              {...props} />)}
        </div>
      </section>
    </main>
    </>
  );
};

export default SearchList;