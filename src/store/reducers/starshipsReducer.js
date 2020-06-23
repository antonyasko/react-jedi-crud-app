import { SET_STARSHIPS, DELETE_STARSHIPS } from '../actions/starshipsActions';

const initialState = {
  allStarships: [],
};

function starshipsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STARSHIPS:
      return {
        ...state,
        allStarships: action.starships,
      };
    case DELETE_STARSHIPS:
      return {
        ...state,
        allStarships: state.allStarships.filter((starship) => starship.id !== action.id),
      };
    default:
      return state;
  }
}

export default starshipsReducer;
