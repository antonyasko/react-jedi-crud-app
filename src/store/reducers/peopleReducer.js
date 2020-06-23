import { SET_PEOPLE, DELETE_PEOPLE } from '../actions/peopleActions';

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
    case DELETE_PEOPLE:
      return {
        ...state,
        allPeople: state.allPeople.filter((person) => person.id !== action.id),
      };
    default:
      return state;
  }
}

export default peopleReducer;
