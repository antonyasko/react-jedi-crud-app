import { SET_PLANETS, DELETE_PLANETS, CHANGE_BELOVED_PLANETS } from '../actions/planetsActions';

const initialState = {
  allPlanets: localStorage.getItem('list-planets-key')
    ? JSON.parse(localStorage.getItem('list-planets-key'))
    : [],
};

function planetsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLANETS:
      return {
        ...state,
        allPlanets: action.planets,
      };
    case DELETE_PLANETS: {
      const data = {
        ...state,
        allPlanets: (state.allPlanets.length > 1)
          ? state.allPlanets.filter((planet) => planet.id !== action.id)
          : state.allPlanets,
      };
      localStorage.setItem('list-planets-key', JSON.stringify(data.allPlanets));
      return data;
    }
    case CHANGE_BELOVED_PLANETS:
      return {
        ...state,
        allPlanets: state.allPlanets.map((planet) => ((planet.id === action.id)
          ? { ...planet, beloved: !planet.beloved }
          : planet)),
      };
    default:
      return state;
  }
}

export default planetsReducer;