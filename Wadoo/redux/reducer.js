import {SETEVENTS, SETUSER} from './actions'
import {ListView} from 'react-native'

const initialState = {
  events: null,
  user: null
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SETEVENTS:{
	  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
      var dataSource = ds.cloneWithRows(action.events);
    };
      return Object.assign({}, state, {events: action.events, eventsDS: dataSource})
	}
	  case SETUSER: {
      consol.log(action.user)
	  return Object.assign({}, state,{user: action.user})
	}
    default:
      return state;
  }
}
