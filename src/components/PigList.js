import React, { useState } from 'react';
import PigCard from './PigCard';
import Filter from './Filter';

function PigList({ hogs })  {
  const [isFiltered, setIsFiltered] = useState(false)
  const [sortBy, setSortBy] = useState("none")

  function handleSortByOption(event) {
    setSortBy(event.target.value)
  }

  function handleFilterCheckbox() {
    setIsFiltered(!isFiltered)
  }

  const filteredPigs = hogs.filter((hog) => {
    if (isFiltered === false) return true

    return hog.greased
  })

  if (sortBy === "weight asc") {
    filteredPigs.sort((pig_a, pig_b) => {
      return pig_a.weight - pig_b.weight
    })
  } 

  if (sortBy === "weight desc") {
    filteredPigs.sort((pig_a, pig_b) => {
      return pig_b.weight - pig_a.weight
    })
  } 
  
  if (sortBy === "name asc") {
    filteredPigs.sort((pig_a, pig_b) => {
      const nameA = pig_a.name.toUpperCase();
      const nameB = pig_b.name.toUpperCase();
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })
  }

  if (sortBy === "name desc") {
    filteredPigs.sort((pig_a, pig_b) => {
      const nameA = pig_a.name.toUpperCase();
      const nameB = pig_b.name.toUpperCase();
      if (nameA < nameB) {
        return 1
      }
      if (nameA > nameB) {
        return -1
      }
      return 0
    })
  }

  const pigCardComponents = filteredPigs.map((hog) => {
    return <PigCard
            key={hog.name} 
            image={hog.image}
            name={hog.name}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            highestMedal={hog["highest medal achieved"]}
          />
  })

  return (
    <div>
      <Filter 
        handleFilterCheckbox={handleFilterCheckbox} 
        isFiltered={isFiltered}
        sortBy={sortBy}
        handleSortByOption={handleSortByOption} 
      />
      <ul className={"ui grid container"}>
        {pigCardComponents}
      </ul>  
    </div>
  )
}

export default PigList 