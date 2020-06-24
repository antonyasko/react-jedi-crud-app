import { SET_STARSHIPS, DELETE_STARSHIPS, CHANGE_BELOVED_STARSHIPS } from '../actions/starshipsActions';

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
    case CHANGE_BELOVED_STARSHIPS:
      return {
        ...state,
        allStarships: state.allStarships.map((starship) => ((starship.id === action.id)
          ? { ...starship, beloved: !starship.beloved }
          : starship)),
      };
    default:
      return state;
  }
}

export default starshipsReducer;
