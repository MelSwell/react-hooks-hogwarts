import React, { useState } from 'react';

function PigCard({ image, name, specialty, weight, greased, highestMedal }) {
  const [showDetails, setShowDetails] = useState(false)

  function handleImageClick() {
    setShowDetails(!showDetails)
  }

  return (
    <li className={"ui eight wide column card"}>
      <img onClick={handleImageClick} src={image} alt={name} height="100px" weight="100px"/>
      <h3>{name}</h3>
      <div style={{display: showDetails ? "block" : "none"}}>
        <p>Specialty: {specialty}</p>
        <p>Weight: {weight} lbs</p>
        <p>{greased ? "A greasy pig" : "Not a greasy pig"}</p>
        <p>Highest Medal: {highestMedal}</p>
      </div>  
    </li>
  )
}

export default PigCard;