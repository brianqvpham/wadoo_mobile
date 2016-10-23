import { createStore, applyMiddleware, combineReducers } from 'redux';

import {reducer} from './reducer'
import {setEvents, setUser} from './actions'
import * as WindowsAzure from 'azure-mobile-apps-client';
import {Alert} from 'react-native';

// Create client connection
var client = WindowsAzure.MobileServiceClient("wadoo-mobile.azurewebsites.net");

// Create reference to tables
var event_table = client.getTable("Event");
var user_event_table = client.getTable("User_Event");

const store = createStore(reducer);

export function GetState(){
	return store.getState();
}

export function SetEvents(events){
	store.dispatch(setEvents(events));
}

export function SetUser(user){
	store.dispatch(setUser(user));
}

// if SQL request fails
function failure(error) {
  console.log('Error loading event data: ');
  Alert.alert('Unable to get events.');
}



export function getEvents() {
  return new Promise((resolve, reject) => {
	queryEvents()
		.then(queryEventIDS)
			.then((result) => {
				setEvents(result)
				resolve()
			})
		.catch(reject)
	.catch(reject)
  }
}

// Query for event ids tied to user
function queryEvents(){
  return new Promise((resolve, reject) => {
	user_event_table.select('event_id')
      .where({user_id : GetState().user})
      .read()
      .then(resolve)
	  .catch(reject);
  })
}

// Uses event ids to query for events
fuction queryEventIDS(results) {
  return new Promise((resolve, reject) {
  event_table
		.where((id) => {
			for(var i = 0; i < results.length; i++){
				if(results[i] == id)
					return true
			}
			return false;
		})
		.orderBy('date')
		.read()
		.then(storeEvents, failure);
  }
}


