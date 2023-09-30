import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { Heart } from "@phosphor-icons/react";
import "./styles.css";

function Card(props) {
  // props = { myFavorites, addFav, removeFav, id, name, origin, species, gender, image }

  const [isFav, setIsFav] = useState(false); // true <=> false

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  const handleFavorite = (e) => {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav(props);
    }
  };

  return (
    <div className="card">
      {isFav ? (
        <button onClick={handleFavorite} className="favorite">
          <Heart size={20} weight="fill" className="heartFill" />
        </button>
      ) : (
        <button onClick={handleFavorite} className="favorite">
          <Heart size={20} className="heart" />
        </button>
      )}
      <button onClick={props.onClose} className="close">
        X
      </button>
      <NavLink to={`/detail/${props.id}`}>
        <h2 className={"card-link"}>{props.name}</h2>
      </NavLink>
      {/* <h2>{props.status}</h2> */}
      <h2 className="card-species">{props.species}</h2>
      <h2 className="card-gender">{props.gender}</h2>
      <h2 className="card-origin">Origen: {props.origin}</h2>
      <img src={props.image} alt="" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});

const mapDispatchToProps = (dispatch) => ({
  addFav: (character) => {
    dispatch(addFav(character));
  },
  removeFav: (id) => {
    dispatch(removeFav(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
