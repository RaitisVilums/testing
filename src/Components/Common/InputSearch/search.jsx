import React from "react";
import search from "../../../Assets/search.svg";
import Button from "../Button/button";
import "./search.styles.scss";

const Search = () => {
  return (
    <div className="search">
      <input className="search-input" type="text" />
      <Button className={`btn-search`}>
        <img src={search} alt="search icon" />
      </Button>
    </div>
  );
};

export default Search;
