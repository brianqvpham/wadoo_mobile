export const SETEVENTS = 'SETEVENTS'
export const SETUSER = 'SETUSER'
export const SETFRIENDS = 'SETFRIENDS'
export const CONFIRMEVENT = 'CONFIRMEVENT'
export const PASSEVENT = 'PASSEVENT'

export function setEvents(pendingEvents, confirmedEvents, passedEvents) {
  return {
    type: SETEVENTS,
    pendingEvents: pendingEvents,
    confirmedEvents: confirmedEvents,
    passedEvents: passedEvents
  }
}

// Called when a user says yes to an event
export function confirmEvent(id){
  return {
    type: CONFIRMEVENT,
    id: id
  }
}

// Called when a user says no to an event
export function passEvent(id){
	return {
		type: PASSEVENT,
		id: id	
  }
}

export function setUser(user) {
  return {
    type: SETUSER,
	user: user
  };
}

export function setFriends(friends){
	return {
		type: SETFRIENDS,
		friends: friends
	}
}