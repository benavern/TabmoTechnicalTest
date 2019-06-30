import pokemons from './pokemons'
import basket from './basket'
import details from './details'
import messages from './messages'
import { combineReducers } from "redux";

export default combineReducers({
  pokemons,
  basket,
  details,
  messages
})
