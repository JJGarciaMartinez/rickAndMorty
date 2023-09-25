const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const { id } = req.params;
  axios
    .get(URL + id)
    .then(({ data }) => {
      const { id, status, name, species, origin, image, gender } = data;
      const character = { id, status, name, species, origin, image, gender };
      character.name
        ? res.status(200).json(character)
        : res.status(404).json({ message: "Character not found" });
    })
    .catch((error) => res.status(500).send(error.message));
};

module.exports = getCharById;
