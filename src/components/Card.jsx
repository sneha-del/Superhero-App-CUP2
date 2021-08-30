import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./card.css";
import Description from "./Description";
const Card = ({ data }) => {
  //   const history = useHistory();
  //   const handleClick = () => history.push("/Description");
  //   const { data } = props;
  console.log(data);

  return (
    <>
      <div className="card">
        <img src={data.image.url} alt="superhero" />
        <div className="text">
          <h1>{data.name}</h1>
          <h3>{data.biography["full-name"]}</h3>
          <div>PowerStats: {data.powerstats.strength}</div>
          <div>Power: {data.powerstats.power}</div>
        </div>
        <button>
          <Link to={`/description/${data.id}`} className="btn-more">
            More
          </Link>
        </button>

        <div className="buttons">
          <FavoriteBorderIcon className="fav" />
        </div>
      </div>
    </>
  );
};

export default Card;
