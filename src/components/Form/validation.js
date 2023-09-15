export default function Validation(input) {
  //input = email || password
  //hola => false
  //hola@gmail.com => true
  /*{
    email: "¡Debe ingresar un email!",
    password: "Error correspondiente a la contraseña!",
  }*/

  const error = {};
  const regexEmail = /\S+@\S+\.\S+/;
  const regexPass = new RegExp("[0-9]");

  if (!regexEmail.test(input.email)) {
    error.email = "¡Debe ingresar un email válido!";
  }
  if (!input.email) {
    error.email = "¡Debe ingresar un email!";
  }
  if (input.email > 35) {
    error.email = "¡Debe ingresar un email no mayor a 35 caracteres!";
  }

  if (!regexPass.test(input.password)) {
    error.password = "¡Debe contener al menos un número!";
  }
  if (input.password.length < 6 || input.password.length > 10) {
    error.password = "¡Contraseña mayor a 6 y menor a 10 caracteres!";
  }

  return error;
}
