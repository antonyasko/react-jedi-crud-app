import { SET_PEOPLE } from '../actions/peopleAction';

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
