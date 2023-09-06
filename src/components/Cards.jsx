import React from 'react';
import Card from './Card.jsx';

export default function Cards({ characters, onClose }) {
   return (<div>
      {characters.map((character, index) => (
      <Card key={index} 
         id={character.id}
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin.name}
         image={character.image}
         onClose={() => onClose(character.id)}
      />   
      ))}
   </div>);
}
