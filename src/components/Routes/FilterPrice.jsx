import React from 'react'

const FilterPrice = () => {
  return (
    <div className='Filter__Types'>
        <h2>Price</h2>
    <div className="filter__line"/>
    <div className="filter__content">
       <label htmlFor="">Price: </label>
       <input type="number"/>
    </div>
    </div>
  )
}

export default FilterPrice