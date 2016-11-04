import {GetState, SetUser, SetEvents, ConfirmEvent, PassEvent} from '../redux/store'
import {eventFactory} from '../factories/event-factory'
test('inital Store is initalized', () => {
  expect(GetState()).toBeDefined()
})

test('inital user to be null', () => {
  expect(GetState().user).toBeNull()
})

test('initial events are an empty lists', () => {
  expect(GetState().pendingEvents).toEqual([]);
  expect(GetState().confirmedEvents).toEqual([]);
  expect(GetState().passedEvents).toEqual([]);
})

test('inital ListView Data Store objects initalized', () => {
  expect(GetState().pendingEventsDS).toBeDefined();
  expect(GetState().confirmedEventsDS).toBeDefined();
  expect(GetState().passedEventsDS).toBeDefined();
})

test('user added to store', () => {
  SetUser({id : 2})
  expect(GetState().user).toEqual({id: 2})
})

test('Events added to store',() => {
  pendingEvents   = eventFactory(5)
  confirmedEvents = eventFactory(2)
  passedEvents    = eventFactory(1)
  
  SetEvents(pendingEvents, confirmedEvents, passedEvents)
  expect(GetState().pendingEvents.length).toEqual(5);
  expect(GetState().confirmedEvents.length).toEqual(2);
  expect(GetState().passedEvents.length).toEqual(1);
})

test('Confirm Event',() => {
  pendingEvents   = eventFactory(5)
  confirmedEvents = eventFactory(2)
  passedEvents    = eventFactory(1)
  
  SetEvents(pendingEvents, confirmedEvents, passedEvents)
  ConfirmEvent(pendingEvents[0].id)
  expect(GetState().pendingEvents.length).toEqual(4);
  expect(GetState().confirmedEvents.length).toEqual(3);
  expect(GetState().passedEvents.length).toEqual(1);
  expect(GetState().confirmedEvents).toContainEqual(pendingEvents[0])
})

test('Pass Event',() => {
  pendingEvents   = eventFactory(5)
  confirmedEvents = eventFactory(2)
  passedEvents    = eventFactory(1)
  
  SetEvents(pendingEvents, confirmedEvents, passedEvents)
  PassEvent(pendingEvents[0].id)
  expect(GetState().pendingEvents.length).toEqual(4);
  expect(GetState().confirmedEvents.length).toEqual(2);
  expect(GetState().passedEvents.length).toEqual(2);
  expect(GetState().passedEvents).toContainEqual(pendingEvents[0])
})
/*
test('initial event ) */