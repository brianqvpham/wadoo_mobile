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
		<View style={{flex:1}}>
		<Navigator
        initialRoute={{ name: LOGIN, index: 0 }}
        renderScene={renderScene}
		/>
		<View style={styles.logoContainer}>
			<Text style={styles.logo}>Wadoo</Text>
		</View>
	  </View>
	  
    );
  }
}

const styles = StyleSheet.create({
    logo:{
		fontSize: 30,
		textAlign: 'center',
		color: '#45ADA8'
	},
	logoContainer: {
		alignItems:'center',
		backgroundColor:'#594f4f'
	}
});

AppRegistry.registerComponent('Wadoo', () => Wadoo);
