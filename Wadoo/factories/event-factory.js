var eventFactoryId = 0;
var friendFactoryId = 0;

export function eventFactory(count = 1, options = {}){
  var list = []
  while(count > 0){
    list = [...list, Object.assign({}, {
      id: eventFactoryId,
      name: "Id: " + eventFactoryId,
      desc: "Events before this one: " + eventFactoryId,
      location: "Here",
      date: "Now"
    }, options)]
    count--;
    eventFactoryId++;
  }
  return list
}

export function friendFactory(count = 1, options = {}){
    var list = []
  while(count > 0){
    list = [...list, Object.assign({}, {
      id: friendFactoryId,
      name: "Id: " + friendFactoryId,
      events: []
    }, options)]
    count--;
    friendFactoryId++;
  }
  return list;
}