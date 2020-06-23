import { SET_PLANETS } from '../actions/planetsAction';

const initialState = {
  allPlanets: [],
};

function planetsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLANETS:
      return {
        ...state,
        allPlanets: action.planets,
      };

    default:
      return state;
  }
}

export default planetsReducer;
