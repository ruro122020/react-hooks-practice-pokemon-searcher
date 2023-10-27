import React, {useState} from "react";

function Search({searchValue, setSearchValue}) {
  const handleSearchInputChange=(e)=>{
    setSearchValue(e.target.value)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchValue} onChange={handleSearchInputChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
