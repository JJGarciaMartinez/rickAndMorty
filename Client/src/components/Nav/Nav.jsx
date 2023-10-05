import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import "./styles.css";
import { House, Heart, SignOut, Shuffle } from "@phosphor-icons/react";

export default function Nav({ onSearch, logOut, onRandom }) {
  // props == { onSearch }
  return (
    <div className="nav">
      <div className="links">
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
      </div>
      <div className="bar">
        <SearchBar onSearch={onSearch} className="search" />
        <NavLink className={"random"}>
          <button onClick={onRandom}>
            <Shuffle size={15} className="icon" />
          </button>
        </NavLink>
        <NavLink to="/" className={"logOut"}>
          <button onClick={logOut}>
            <SignOut size={20} weight="fill" />
          </button>
        </NavLink>
      </div>
    </div>
  );
}
