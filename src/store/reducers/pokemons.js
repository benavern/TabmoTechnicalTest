const defaultState = {
  list: [
    {
      name:"bulbasaur",
      url:"https://pokeapi.co/api/v2/pokemon/1/",
      price: Math.round(Math.random() * 1000)
    },
    {
      name:"ivysaur",
      url:"https://pokeapi.co/api/v2/pokemon/2/",
      price: Math.round(Math.random() * 1000)
    },
    {
      name:"test 3",
      url:"https://pokeapi.co/api/v2/pokemon/1/",
      price: Math.round(Math.random() * 1000)
    },
    {
      name:"test 4",
      url:"https://pokeapi.co/api/v2/pokemon/2/",
      price: Math.round(Math.random() * 1000)
    }
  ],
  details: {}
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        list: [...state.list, {...action.payload, price: Math.round(Math.random() * 1000)}]
      };
    default:
      return state;
  }
}
