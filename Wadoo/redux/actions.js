export const SETEVENTS = 'SETEVENTS'
export const SETUSER = 'SETUSER'
export const SETFRIENDS = 'SETFRIENDS'
export const ADDEVENT = 'ADDEVENT'

export function setEvents(events) {
  return {
    type: SETEVENTS,
	events: events
  };
}

export function addEvent(event){
	return {
		type: ADDEVENT,
		event: event
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