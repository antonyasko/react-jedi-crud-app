import { SET_STARSHIPS } from '../actions/starshipsAction';

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

    default:
      return state;
  }
}

export default starshipsReducer;
