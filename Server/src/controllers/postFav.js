const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { id, name, origin, status, image, species, gender } = req.body;
    if (id && name && origin && status && image && species && gender) {
      await Favorite.findOrCreate(req.body);
      const allFavorites = await Favorite.findAll();
      return res.status(200).json(allFavorites);
    }
    return res.status(400).send("Faltan datos");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = postFav;
