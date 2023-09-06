import React, { useState } from 'react';
export default function SearchBar(props) {
   const [id, setId] = useState('');

   const handleChange = (e) => {
      setId(e.target.value);
   }

   const handleClick = (e) => {
      props.onSearch(id);
      setId('');
   }

   return (
      <div>
         <input type="text" 
         name="search" 
         id="search"
         value={id}
         onChange={handleChange}/>

         <button onClick={handleClick}>Agregar</button>
         {/*               ^ callback */}
      </div>
   );
}
