import React from 'react';

function Filter({ handleFilterCheckbox, isFiltered, sortBy, handleSortByOption }) {

  return (
    <div className="filterWrapper">
      <label>
        Check to view only greased pigs:
        <input type="checkbox" value={isFiltered} onChange={handleFilterCheckbox} />
      </label>
      <br />
      <label>
        Sort By:
        <select value={sortBy} onChange={handleSortByOption}>
          <option value="none">None</option>
          <option value="name asc">Name (ascending)</option>
          <option value="name desc">Name (descending)</option>
          <option value="weight desc">Weight (descending)</option>
          <option value="weight asc">Weight (ascending)</option>
        </select>
      </label>
    </div>
  )
}

export default Filter;