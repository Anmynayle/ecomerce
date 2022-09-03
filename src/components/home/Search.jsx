import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div className='search'>
       <input type="text" placeholder='What are you looking for' />
       <button><i className='bx bx-search-alt'></i></button>
    </div>
  )
}

export default Search