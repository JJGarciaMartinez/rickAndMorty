import React, { useState } from 'react';
import SearchBar from './SearchBar';
export default  function Nav({ onSearch }) {
    // props == { onSearch }
    return (
        <div>
            <SearchBar onSearch={onSearch} className='search'/>
        </div>
    )
}


