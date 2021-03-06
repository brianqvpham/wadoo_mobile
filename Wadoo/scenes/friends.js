import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

import {SetFriends, SetEvents, GetState} from '../redux/store';
import {EVENTSJSON} from '../debug/constants'
import {getEvents} from '../redux/reducer';
import Button from 'react-native-button'
import {EVENTS} from './events'
import {FRIEND} from './friend'

export const FRIENDS = 'FRIENDS'

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

export function renderFriends(navigator){
  console.log("RenderFriends")
  SetFriends([{id: 0, 
              name: "Jaime Munoz", 
			  events: [0, 1]
			 },
			  {id: 1,
			   name: "Brian Pham",
			   events: [1]
			  }])
	return(
	<View style={styles.container}>
	<View style={styles.buttonRow}>
			<Button 
				containerStyle={styles.buttonContainer}
				style={styles.buttontext}
				onPress={() => {
					navigator.pop()
				}}>
				Swipe
			</Button>
			<Button 
				containerStyle={styles.buttonContainer}
				style={styles.buttontext}
				onPress={() => {
					navigator.replace({name: EVENTS})
				}}>
				Events
			</Button>
			<Button 
				containerStyle={[styles.buttonContainer, {backgroundColor: '#9DE0AD'}]}
				style={styles.buttontext}>
				Friends
			</Button>
			</View>
		<ListView
			dataSource={GetState().friendsDS}
			renderRow={(rowData) => <TouchableHighlight 
							style={styles.listItem}
							onPress={()=> {
								navigator.push({name: FRIEND, friend: rowData, events: mutualEvents(GetState().events, rowData)})
							}}>
							<View>
					<Text>
					Name: {rowData.name}
					</Text>
					<Text>
					Mutual Events: {mutualEvents(GetState().events, rowData).length}
					</Text>
					</View>
				</TouchableHighlight>}
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
