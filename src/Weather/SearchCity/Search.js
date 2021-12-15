import React from 'react';
import './Seach.css';

function Search ({onSubmit}) {

  return (
      <form className='SearchForm' onSubmit={onSubmit}>
          <input type='text' name='city' placeholder="Enter city..."/>
          <button type='submit'>Search</button>
      </form>    
  );
  
}

export default Search;
