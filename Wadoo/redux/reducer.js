import {SETEVENTS, SETUSER, SETFRIENDS, CONFIRMEVENT, PASSEVENT} from './actions'
import {ListView} from 'react-native'

const initialState = {
  user: null,
  pendingEvents: [],
  pendingEventsDS: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows([]),
  confirmedEvents: [],
  confirmedEventsDS: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows([]),
  passedEvents: [],
  passedEventsDS: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows([]),
  friends: [],
  friendsDS: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows([]),
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SETUSER: {
      return Object.assign({}, state,{user: action.user})
    }
    case SETEVENTS:{
      // Creating ListView DataSources for each event status
      const pendingEventsDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        .cloneWithRows(action.pendingEvents)
      const confirmedEventsDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        .cloneWithRows(action.confirmedEvents)
      const passedEventsDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        .cloneWithRows(action.passedEvents)
      
      return Object.assign({}, state, {
        pendingEvents : action.pendingEvents, 
        pendingEventsDS: pendingEventsDS,
        confirmedEvents: action.confirmedEvents,
        confirmedEventsDS: confirmedEventsDS,
        passedEvents: action.passedEvents,
        passedEventsDS: action.passedEventsDS
      })
    }
    case CONFIRMEVENT: {
      var newPendingEvents = []
      var newConfirmedEvents = state.confirmedEvents
      for(var i = 0; i < state.pendingEvents.length; i++){
        if(state.pendingEvents[i].id == action.id)
          newConfirmedEvents = [...newConfirmedEvents, state.pendingEvents[i]]
        else
          newPendingEvents = [...newPendingEvents, state.pendingEvents[i]]
      }
      const pendingEventsDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        .cloneWithRows(newPendingEvents)
      const confirmedEventsDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        .cloneWithRows(newConfirmedEvents)
      
      return Object.assign({}, state, {
        pendingEvents : newPendingEvents, 
        pendingEventsDS: pendingEventsDS,
        confirmedEvents: newConfirmedEvents,
        confirmedEventsDS: confirmedEventsDS
      })
    }
    case PASSEVENT : {
      var newPendingEvents = []
      var newPassedEvents = state.passedEvents
      for(var i = 0; i < state.pendingEvents.length; i++){
        if(state.pendingEvents[i].id == action.id)
          newPassedEvents = [...newPassedEvents, state.pendingEvents[i]]
        else
          newPendingEvents = [...newPendingEvents, state.pendingEvents[i]]
      }
      const pendingEventsDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        .cloneWithRows(newPendingEvents)
      const passedEventsDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        .cloneWithRows(newPassedEvents)
      
      return Object.assign({}, state, {
        pendingEvents : newPendingEvents, 
        pendingEventsDS: pendingEventsDS,
        passedEvents: newPassedEvents,
        passedEventsDS: passedEventsDS
      })
    }
    case SETFRIENDS: {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        var dataSource = ds.cloneWithRows(action.friends);
        return Object.assign({}, state, {friends: action.friends, friendsDS: dataSource})
    }
    default: {
      return state;
    }
  }
}
