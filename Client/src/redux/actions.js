import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, ERROR } from "./action-types";
import axios from "axios";

const endpoint = "http://localhost:3001/rickandmorty/fav";
export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character); // Promesa
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${endpoint}/${id}`); // Promesa
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}
export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}
