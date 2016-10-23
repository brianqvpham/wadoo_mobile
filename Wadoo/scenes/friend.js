import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import {SetFriends, SetEvents, GetState} from '../redux/store';
import {EVENTSJSON} from '../debug/constants'
import {getEvents} from '../redux/reducer';
import Button from 'react-native-button'
import {EVENTS} from './events'

export const FRIEND = 'FRIEND'

var mutualEvents = (events, user) => {
	result = [];
	for(var i = 0; i < events.length; i++){
		userEvents = user.events;
		for(var j = 0; j < userEvents.length; j++)
			if(userEvents[j] == events[i].id){
				result = [...result, events[i]]
				break;
			}
	}
	return result
}

export function renderFriend(navigator, friend, events){
  console.log("RenderFriends")
	var DataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(events)
	return(
	<View style={styles.container}>
		<View style={styles.buttonRow}>
			<Button 
				containerStyle={styles.buttonContainer}
				style={styles.buttontext}
				onPress={() => {
					navigator.pop()
				}}>
				Back
			</Button>
		</View>
		<View>
			<Text>{friend.name}</Text>
		</View>
		<ListView
			dataSource={DataSource}
				renderRow={(rowData) => <View style={styles.listItem}>
					<Text>
					Event Name: {rowData.name}
					</Text>
					<Text>
					Description: {rowData.desc}
					</Text>
					<Text>
					When: {rowData.date}
					</Text>
					<Text>
					Location: {rowData.location}
					</Text>
					</View>}
		/>
	</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex:1,
	},
	listItem: {
		margin: 10,
	},
	textStyle: {
		color:"#cc6600"
	},
    buttonRow: {
	  flexDirection: 'row',
    },
    buttonContainer: {
	  flex:1,
	  marginRight: 10,
	  marginLeft: 10,
	  backgroundColor:'#45ADA5',
	  borderStyle: 'solid',
	  borderColor:'#45ADA5',
	  borderRadius: 5,
    },
    buttontext:{
	  color: "#E5FCC2"
    },
})
