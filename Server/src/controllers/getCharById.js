const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const charId = req.params.id;
    const { data } = await axios.get(URL + charId); //Promesa
    const { id, status, name, species, origin, image, gender } = data;
    const character = { id, status, name, species, origin, image, gender };

    character.name
      ? res.status(200).json(character)
      : res.status(404).json({ message: "Character not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getCharById;
