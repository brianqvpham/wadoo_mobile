export const SETEVENTS = 'SETEVENTS'
export const SETUSER = 'SETUSER'
export function setEvents(events) {
  return {
    type: SETEVENTS,
	events: events
  };
}

export function setUser(user) {
  return {
    type: SETUSER,
	user: user
  };
}
