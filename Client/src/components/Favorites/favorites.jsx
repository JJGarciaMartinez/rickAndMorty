import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions.js";
import "../Cards/styles.css";
import Card from "../Cards/Card.jsx";

function Favorites({ myFavorites, onClose }) {
  // console.log(characters); // [ {...}, {...}, ... ]
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  //! AL INICIO DESPACHA ACCIÓN "order"
  useEffect(() => {
    dispatch(orderCards("A"));
  }, []);
  //!

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    aux ? setAux(false) : setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <div className="filters">
        <select name="order" onChange={handleOrder} className="options1">
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select name="filter" onChange={handleFilter} className="options2">
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown.">unknown</option>
        </select>
      </div>
      <div className="cards">
        {myFavorites.map((character, index) => (
          <Card
            key={index}
            id={character.id}
            name={character.name}
            //  status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            onClose={() => onClose(character.id)}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});

export default connect(mapStateToProps)(Favorites);
