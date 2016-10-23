import { createStore, applyMiddleware, combineReducers } from 'redux';

import {reducer} from './reducer'
import {setEvents, setUser} from './actions'
import * as WindowsAzure from 'azure-mobile-apps-client';
import {Alert} from 'react-native';

// Create client connection
var client = WindowsAzure.MobileServiceClient("wadoo-mobile.azurewebsites.net");

// Create reference to tables
var user_table = client.getTable("User");
var event_table = client.getTable("Event");
var user_event_table = client.getTable("User_Event");
var friend_table = client.getTable("Friend");

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

// Inserts new user if query for user is empty
function insertNewUser(results) {
	var numItemsRead = results.length
	if (numItemsRead === 0) {
		var newUser = {
			id: GetState().user,
			password: null,
			username: null
		};
		user_table
			.insert(newUser);
	}
}

// Checks if new user
export function checkNewUser() {
	user_event_table
		.where(user_id : GetState().user)
		.read()
		.then(insertNewUser);
}

// if SQL request fails
function failure(error) {
  console.log('Error loading event data: ');
  Alert.alert('Unable to get events.');
}

// Stores the events
function storeEvents(results) {
	SetEvents(results);
}

// Uses event ids to query for events
fuction getEventIDS(results) {
  event_table
		.orderBy('date')
    .read()
    .then(storeEvents, failure);
}


function getEvents() {
  // Query for event ids tied to user
  user_event_table.select('event_id')
    .where({user_id : GetState().user})
    .read()
    .then(getEventIDS, failure);
}
