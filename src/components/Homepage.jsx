import React, { useState } from "react";
import Search from "./Search";
import Result from "./Result";
import "./homepage.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
const Homepage = () => {
  const [input, setInput] = useState("");
  const [superData, setSuperData] = useState([]);
  const [showFavHeroes, setShowFavHeroes] = useState(false);

  async function apiGet() {
    const res = await fetch(
      `https://www.superheroapi.com/api.php/1410771082650366/search/${input}`
    );
    const data = await res.json();
    console.log(data.results);
    setSuperData(data.results);
    setShowFavHeroes(false);
  }

  function handle(e) {
    const searchTerm = e.target.value;
    setInput(searchTerm);

    apiGet();
  }

  return (
    <div className="Homepage">
      {/* using props to pass the data */}
      <Search input={input} handle={handle} />
      <Result superData={superData} />
      {/* <FavoriteBorderIcon
        onClick={() => setShowFavHeroes(true)}
        className="fav"
      /> */}
    </div>
  );
};

export default Homepage;
