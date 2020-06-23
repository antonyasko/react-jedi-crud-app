import { SET_PEOPLE } from '../actions/actions';

const initialState = {
  allPeople: [],
};

function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PEOPLE:
      return {
        ...state,
        allPeople: action.people,
      };

    default:
      return state;
  }
}

export default peopleReducer;
