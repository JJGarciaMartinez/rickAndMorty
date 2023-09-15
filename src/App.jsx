import "./App.css";
// import Card from './components/Card.jsx';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import About from "./components/About/About.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Favorites from "./components/Favorites/favorites.jsx";

function App() {
  const navigate = useNavigate(); // Se guarda el path actual y redirecciona
  //   console.log(navigate);
  const [access, setAccess] = useState(false);
  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "123456ab";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home"); // Redirecciona a /home
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }

  useEffect(() => {
    !access && navigate("/home");
  }, [access]);

  const [characters, setCharacters] = useState([]);

  const location = useLocation();
  //   console.log(location);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        //{data: {}}
        if (data.name) {
          setCharacters([...characters, data]);
        } else {
          window.alert("¡Ingresa un ID!");
        }
      })
      .catch(() => {
        window.alert("¡No hay personajes con este ID!");
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  const logOut = () => {
    setAccess(false);
    navigate("/");
  };

  return (
    <div className="App">
      {
        location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />
        // '/' false => X
        // '/algoMas...' true => Evaluar la segunda parte
      }
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        {/* <Cards characters={characters} onClose={onClose} /> */}
      </Routes>
    </div>
  );
}

export default App;
