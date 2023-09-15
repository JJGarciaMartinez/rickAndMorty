import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import "./styles.css";

export default function Nav({ onSearch, logOut }) {
  // props == { onSearch }
  return (
    <div className="nav">
      <NavLink to="/about" className={"about"}>
        <button>About</button>
      </NavLink>
      <NavLink to="/home" className={"home"}>
        <button>Home</button>
      </NavLink>
      <SearchBar onSearch={onSearch} className="search" />
      <NavLink to="/" className={"logOut"}>
        <button onClick={logOut}>Salir</button>
      </NavLink>
      <NavLink to="/favorites" className={"favorites"}>
        <button>Favorites</button>
      </NavLink>
    </div>
  );
}
