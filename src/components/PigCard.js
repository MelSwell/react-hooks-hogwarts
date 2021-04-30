import React, { useState } from 'react';

function PigCard({ image, name, specialty, weight, greased, highestMedal }) {
  const [showDetails, setShowDetails] = useState(false)

  const [showPigCard, setShowPigCard] = useState(true)

  function handleImageClick() {
    setShowDetails(!showDetails)
  }

  function handlePigCardBtn () {
    setShowPigCard(!showPigCard)
  }

  return (
    <div className="ui eight wide column card">
      <button onClick={handlePigCardBtn}>{showPigCard ? "Hide" : "Show"} Pig</button>
    <li style={{display: showPigCard ? "block" : "none"}}>
      <img onClick={handleImageClick} src={image} alt={name} height="100px" weight="100px"/>
      <h3>{name}</h3>
      <div style={{display: showDetails ? "block" : "none"}}>
        <p>Specialty: {specialty}</p>
        <p>Weight: {weight} lbs</p>
        <p>{greased ? "A greasy pig" : "Not a greasy pig"}</p>
        <p>Highest Medal: {highestMedal}</p>
      </div>  
    </li>

    </div>
  )
}

export default PigCard;