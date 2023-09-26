import React, { useState } from "react";
import Validation from "./validation";
import "./styles.css";
import Logo from "../../assets/rickAndMorty.png";

export default function Form(props) {
  const [errors, setErrors] = useState({
    email: "Ingrese un email",
    password: "Use una contraseña mayor a 6 caracteres y menor a 10",
  });

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    // console.log(userData);
    setErrors(
      Validation({
        ...userData,
        [name]: value,
      })
    );
    // console.log(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userData);
  };

  return (
    <div className="containerForm">
      <img src={Logo} alt="Rick and Morty API logo" />
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={userData.email}
          placeholder="Ingrese su Email"
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          placeholder="Ingrese su Password"
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button
          type="submit"
          style={{ marginTop: "15px" }}
          disabled={errors.email || errors.password}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
