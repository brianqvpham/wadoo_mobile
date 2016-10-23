import { createStore, applyMiddleware, combineReducers } from 'redux';

import {reducer} from './reducer'
import {setEvents, setUser} from './actions'

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