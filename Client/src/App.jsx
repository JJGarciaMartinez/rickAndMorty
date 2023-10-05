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
import Footer from "./components/Footer/footer";
import background from "./assets/2k_stars_milky_way.jpg";

function App() {
  const navigate = useNavigate(); // Se guarda el path actual y redirecciona
  //   console.log(navigate);
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      setAccess(data.access);
      data.access && navigate("/home");
      if (!data.access) alert("Usuario o contraseña incorrectos");
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const location = useLocation();
  //   console.log(location);

  async function onSearch(id) {
    const charById = characters.find((char) => char.id === Number(id)); // Devuelve un array con el personaje buscado
    if (charById) return alert("Personaje ya existe");
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      setCharacters((characters) => [...characters, data]);
    } catch (error) {
      alert(error);
    }
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  const logOut = () => {
    setAccess(false);
    navigate("/");
  };

  const [characterCount, setCharacterCount] = useState(0);

  useEffect(() => {
    const fetchCharacterCount = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setCharacterCount(response.data.info.count);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacterCount();
  }, []);

  const onRandom = () => {
    const id = Math.floor(Math.random() * characterCount);
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data) {
          const existChar = characters.find((char) => char.id === data.id);
          if (!existChar) {
            setCharacters([...characters, data]);
          } else {
            //* Se ejecuta cuando ya existe un personaje
            onRandom();
          }
        }
      })
      .catch((error) => {
        console.error("Error al obtener personaje ", error);
      });
  };

  return (
    <>
      <div className="main">
        <Routes>
          <Route path="/" element={<Form login={login} />} />
        </Routes>
        <picture className="background">
          <section className="space"></section>
        </picture>
      </div>
      {location.pathname !== "/" && (
        <div className="App">
          <Nav onSearch={onSearch} logOut={logOut} onRandom={onRandom} />
          <Routes>
            <Route
              path="/home"
              element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route
              path="/favorites"
              element={<Favorites onClose={onClose} />}
            />
            {/* <Cards characters={characters} onClose={onClose} /> */}
          </Routes>

          <picture className="background">
            <img src={background} alt="" />
          </picture>
          <footer className="footer">
            <Footer
              characterCount={characterCount}
              setCharacterCount={setCharacterCount}
            />
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
