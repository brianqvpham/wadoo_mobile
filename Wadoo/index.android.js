import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import {LOGIN, renderLogin} from './scenes/login.js'
import {EVENTS, renderEvents} from './scenes/events.js'
import {FRIENDS, renderFriends} from './scenes/friends.js'
import {HOME, renderHome} from './scenes/home'
import {FRIEND, renderFriend} from './scenes/friend'

function renderScene(route, navigator){
	console.log(route)
	switch(route.name){
		case LOGIN: {
			return renderLogin(navigator)
		}
		case EVENTS: {
			return renderEvents(navigator)
		}
		case FRIENDS: {
			return renderFriends(navigator)
		}
		case HOME: {
			return renderHome(navigator)
		}
		case FRIEND : {
			return renderFriend(navigator, route.friend, route.events)
		}
	}
}

class Wadoo extends Component {
  render() {
    return ( 
      <Navigator
        initialRoute={{ name: LOGIN, index: 0 }}
        renderScene={renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#666666',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Wadoo', () => Wadoo);
