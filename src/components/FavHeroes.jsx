import React from 'react'
import { useSelector } from "react-redux";
import Result from './Result'
const FavHeroes = () => {
    const data = useSelector((state) => state);
    return (
        <div>
            <div>
      <p
        style={{
          fontSize: "300%",
          // fontWeight: "bold",
          textShadow: "2px 3px grey",
        }}
      >
        Fav Heroes List
      </p>
      {data ? (
        <Result superHeroData={data} />
      ) : (
        <h2>Please Add Some SuperHeroes</h2>
      )}
    </div>
        </div>
    )
}

export default FavHeroes

