import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';

export default  function Nav({ onSearch }) {
    // props == { onSearch }
    return (
        <div>
            <NavLink to="/about" >
                <button>About</button>
            </NavLink>
            <NavLink to="/">
                <button>Home</button>
            </NavLink>
            <SearchBar onSearch={onSearch} className='search'/>
        </div>
    )
}


