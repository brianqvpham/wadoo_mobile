var eventFactoryId = 0;

export function eventFactory(count = 1){
  var list = []
  while(count > 0){
    list = [...list, {
      id: eventFactoryId,
      name: "Id: " + eventFactoryId,
      desc: "Events before this one: " + eventFactoryId,
      location: "Here",
      date: "Now"
    }]
    count--;
    eventFactoryId++;
  }
  return list
}