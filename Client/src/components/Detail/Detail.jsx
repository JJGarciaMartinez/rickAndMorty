import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className="detail">
      <img src={character?.image} alt={character.name} />
      <span className="info">
        <a
          href={`http://localhost:3001/rickandmorty/character/${id}`}
          className="name"
        >
          {character?.name}
        </a>
        <h2 className="statusAndSpecies">{`${character?.status}  -  ${character?.species}`}</h2>
        <h3 className="id">
          Character ID: <p>{character?.id}</p>
        </h3>
        <h2 className="gender">
          Gender: <p>{character?.gender}</p>
        </h2>
        <h2 className="origin">
          Origin: <p>{character?.origin?.name}</p>
        </h2>
      </span>
    </div>
  );
}
