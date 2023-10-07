const { User } = require("../DB_connection");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email && password) {
      const actualUser = await User.findOne({ where: { email: email } });
      //* actualUser // { id, email, password } || null
      if (actualUser) {
        if (actualUser.password === password) {
          return res.status(200).json({ access: true });
        }
        return res.status(400).send("Contraseña incorrecta");
      }
      return res.status(400).send("Usuario no encontrado");
    }
    return res.status(400).send("Faltan datos");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = login;

//   let access = false;
//   users.forEach((user) => {
//     if (user.email === email && user.password === password) {
//       access = true;
//     }
//   });
//   return res.status(200).json({ access });
// };
