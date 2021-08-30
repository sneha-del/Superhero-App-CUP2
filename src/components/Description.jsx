// import React from 'react'
// import Card2 from './Card2';
// import { useHistory } from 'react-router-dom';
// import './search.css'
// function Description  (props)  {
//     const history = useHistory();
// const {data}=props;
// console.log(data);
//     const {superData=[]}=props;
//     console.log(superData);
//     return (
//         <>
//         <div className="desc">

//         {superData.map((superhero) =>
//     <Card2 data={superhero.name}/>)}
//       {/* <h1>{data.name}</h1> */}
//       <button className="btn2"onClick={() => history.goBack()}>Go Back</button>

//         </div>
//         </>
//     )
// }

// export default Description

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./card.css";

const Description = ({
  match: {
    params: { id },
  },
}) => {
  const [data, setData] = useState({});
  const getViewDetails = () => {
    axios
      .get(`https://www.superheroapi.com/api.php/1410771082650366/${id}`)
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getViewDetails();
  }, []);
  console.log(data);

  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          width: "auto",
          height: "100%",
          backgroundColor: "black",
        }}
      >
        <img
          style={{
            width: "25%",
            margin: "10%",
            borderRadius: "80px",
          }}
          src={data.image && data.image.url}
          alt=""
        />
        <div className="data">
          <h1>{data.name}</h1>
          <p>Real Name : {data.biography && data.biography["full-name"]}</p>
          <p id="name">Name : {data.name}</p>
          <p>Strength : {data.powerstats && data.powerstats.strength}</p>
          <p>
            Intelligence : {data.powerstats && data.powerstats.intelligence}
          </p>
          <p>Speed : {data.powerstats && data.powerstats.speed}</p>
          <p>Gender : {data.appearance && data.appearance.gender}</p>
          <p>Weight : {data.appearance && data.appearance.weight}</p>
          <p style={{ wordWrap: "break-word", width: "80%" }}>
            Occupation : {data.work && data.work.occupation}
          </p>
          <p>
            PLace of Birth :{" "}
            {data.biography && data.biography["place-of-birth"]}
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;
