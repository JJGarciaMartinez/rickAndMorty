import React, { useState } from "react";
import "./styles.css";
import { Plus } from "@phosphor-icons/react";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleClick = (e) => {
    props.onSearch(id);
    setId("");
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        name="search"
        id="search"
        value={id}
        placeholder="Ingresa un ID"
        onChange={handleChange}
      />

      <button onClick={handleClick}>
        <Plus size={15} />
      </button>
    </div>
  );
}
