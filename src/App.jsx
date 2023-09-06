import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import React, { useState } from 'react';
import axios from 'axios';
import Nav from './components/Nav.jsx';


function App() {
   const example = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   };


   const [characters, setCharacters] = useState([]);
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => { //{data: {}}
         if (data.name) {
            setCharacters([...characters, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      })
      .catch(() => {
         window.alert('¡No hay personajes con este ID!');
      })
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)));
   }

   return (
      <div className='App'>
         <Nav className='navbar' onSearch={onSearch}/>
         <Cards characters={characters} className='cards' onClose={onClose}/>
      </div>
   );
}

export default App;