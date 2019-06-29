import pokemons from './pokemons'
import basket from './basket'
import details from './details'
import errors from './errors'
import { combineReducers } from "redux";

export default combineReducers({
  pokemons,
  basket,
  details,
  errors
})
