import React from "react";
import Card from "../Cards/Card.jsx";
import "../Cards/styles.css";
import { connect } from "react-redux";

function Favorites({ myFavorites, onClose }) {
  return (
    <div className="cards">
      {myFavorites.map((character, index) => (
        <Card
          key={index}
          id={character.id}
          name={character.name}
          //  status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.name}
          image={character.image}
          onClose={() => onClose(character.id)}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});

export default connect(mapStateToProps)(Favorites);
