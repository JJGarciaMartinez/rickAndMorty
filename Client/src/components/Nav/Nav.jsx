import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import "./styles.css";
import { House, Heart, SignOut } from "@phosphor-icons/react";

export default function Nav({ onSearch, logOut }) {
  // props == { onSearch }
  return (
    <div className="nav">
      <NavLink to="/home" className={"home"}>
        <button>
          Home <House size={20} className="icon" />
        </button>
      </NavLink>
      <NavLink to="/favorites" className={"favorites"}>
        <button>
          Favorites <Heart size={20} className="icon" />
        </button>
      </NavLink>
      <NavLink to="/about" className={"about"}>
        <button>About</button>
      </NavLink>
      <SearchBar onSearch={onSearch} className="search" />
      <NavLink to="/" className={"logOut"}>
        <button onClick={logOut}>
          Salir <SignOut size={20} />
        </button>
      </NavLink>
    </div>
  );
}
