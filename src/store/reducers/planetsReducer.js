import { SET_PLANETS, DELETE_PLANETS } from '../actions/planetsActions';

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
    case DELETE_PLANETS:
      return {
        ...state,
        allPlanets: state.allPlanets.filter((planet) => planet.id !== action.id),
      };
    default:
      return state;
  }
}

export default planetsReducer;
