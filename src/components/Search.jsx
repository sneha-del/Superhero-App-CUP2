import React from "react";
import "./search.css";
function Search(props) {
  const {} = props;
  console.log(props);
  const { handle, input } = props;

  return (
    <div className="search-div">
      <h1>Search your Super Hero below !!</h1>
      <input
        type="text"
        placeholder="search .."
        value={input}
        className="search-box"
        onChange={handle}
      />

      {/* <button onClick={apiGet}>Fetch API</button> */}
    </div>
  );
}

export default Search;
