import { SET_PEOPLE, DELETE_PEOPLE, CHANGE_BELOVED_PEOPLE } from '../actions/peopleActions';

const initialState = {
  allPeople: localStorage.getItem('list-people-key')
    ? JSON.parse(localStorage.getItem('list-people-key'))
    : [],
};

function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PEOPLE:
      return {
        ...state,
        allPeople: action.people,
      };
    case DELETE_PEOPLE: {
      const data = {
        ...state,
        allPeople: (state.allPeople.length > 1)
          ? state.allPeople.filter((person) => person.id !== action.id)
          : state.allPeople,
      };
      localStorage.setItem('list-people-key', JSON.stringify(data.allPeople));
      return data;
    }
    case CHANGE_BELOVED_PEOPLE:
      return {
        ...state,
        allPeople: state.allPeople.map((person) => ((person.id === action.id)
          ? { ...person, beloved: !person.beloved }
          : person)),
      };
    default:
      return state;
  }
}

export default peopleReducer;