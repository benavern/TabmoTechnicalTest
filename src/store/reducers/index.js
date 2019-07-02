import { combineReducers } from "redux";
import pokemons from './pokemons';
import basket from './basket';
import details from './details';
import messages from './messages';
import about from './about';

export default combineReducers({
  pokemons,
  basket,
  details,
  messages,
  about
});
