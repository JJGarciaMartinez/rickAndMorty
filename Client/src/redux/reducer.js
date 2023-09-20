import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState = {
  myFavorites: [], // [ {rick, id: 1}, {morty} ]
  user: "",
};
//                                  Se descructura action
export default function reducer(state = initialState, { type, payload }) {
  // action = {type: 'ADD_FAV', payload: character}
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };
    case REMOVE_FAV:
      const filteredFavs = state.myFavorites.filter(
        (fav) => fav.id !== Number(payload)
      );
      return {
        ...state,
        myFavorites: filteredFavs,
      };
    default:
      return { ...state };
  }
}
