import { createStore, applyMiddleware, combineReducers } from 'redux';

import {reducer} from './reducer'
import {setEvents, setUser} from './actions'
import * as firebase from 'firebase';

// Setup firebase
const firebaseConfig = {
    apiKey: "AIzaSyDnLaO-IiNzFF_ffOYllIxxfPnKH80hrJI",
    authDomain: "wadoo-1f5be.firebaseapp.com",
    databaseURL: "https://wadoo-1f5be.firebaseio.com/",
    storageBucket: "gs://wadoo-1f5be.appspot.com",,
}
const firebaseApp = firebase.initializeApp(firebaseConfig);

import {setEvents, setUser, setFriends} from './actions'

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

// Checks snapshot when once is triggered if user already exists in DB
// Adds user to DB if does not exist
export function insertUserIntoDB() {
    firebaseApp.ref('users/').once('value', function(snapshot) {
                if (!snapshot.hasChild(GetState().user) {
                    firebaseApp.ref('users/' + GetState().user).set({
                        user_id: GetState().user
                    });
                }});
)}

// Gets the event
export function getEvents() {
    firebaseApp.ref('users/' + GetState().user + 'my_events').once('value', function(snapshot) {
                // Store event_ids. Translate into events.
                var event_ids = snapshot.val().my_event_id);
                for (i = 0; i < event_ids.length; i++) {
                    firebaseApp.ref('events/' + event_ids[i]).once('value', function(e) {
                        event_ids[i] = e.val();});
                }
                SetEvents(event_ids);
    });

export function SetFriends(friends){
	store.dispatch(setFriends(friends))
}
