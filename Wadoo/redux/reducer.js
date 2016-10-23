import {SETEVENTS, SETUSER} from './actions'

const initialState = {
  events: null,
  user: null
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SETEVENTS:{
      return Object.assign({}, state, {events: action.events})
	}
	  case SETUSER: {
	  return Object.assign({}, state,{user: action.user})
	}
    default:
      return state;
  }
}
