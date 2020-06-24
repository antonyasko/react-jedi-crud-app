import { SET_STARSHIPS, DELETE_STARSHIPS } from '../actions/starshipsActions';

const initialState = {
  allStarships: localStorage.getItem('list-starships-key')
    ? JSON.parse(localStorage.getItem('list-starships-key'))
    : [],
};

function starshipsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STARSHIPS:
      return {
        ...state,
        allStarships: action.starships,
      };
    case DELETE_STARSHIPS: {
      const data = {
        ...state,
        allStarships: (state.allStarships.length > 1)
          ? state.allStarships.filter((starship) => starship.id !== action.id)
          : state.allStarships,
      };
      localStorage.setItem('list-starships-key', JSON.stringify(data.allStarships));
      return data;
    }
    default:
      return state;
  }
}

export default starshipsReducer;
