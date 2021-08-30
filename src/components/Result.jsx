
import React from 'react'
import Card from './Card'
import './result.css'

function Result (props) {
    const {superData=[]}=props;
    console.log(superData);
    return (
    <div className="results">
    {superData.map((superhero) =>
    <Card data={superhero}/>)}
   <br></br>
    </div>
   
    
    )
}

export default Result

