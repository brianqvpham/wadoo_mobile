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
    SetEvents([{id: 0, 
              name: "The Incredibles 2 Premiere", 
			  desc: "The premiere of Pixar\'s The Incredibles 2", 
			  date: "June 21, 2019",
			  location: "Anywhere"},
			  {id: 1,
			   name: "Halal Bros",
			   date: "Always",
			   desc: "Middle Eastern fare, from kebabs to stuffed pitas, in a bright cafe with seats & a take-out counter.",
			   location: "2712 Guadalupe St, Austin, TX 78705"}])
  SetFriends([{id: 0, 
              name: "Jaime Munoz", 
			  events: [0, 1]
			 },
			  {id: 1,
			   name: "Brian Pham",
			   events: [1]
			  }])
	return(
		<ListView
			dataSource={GetState().friendsDS}
			renderRow={(rowData) => <View style={styles.listItem}>
					<Text>
					Name: {rowData.name}
					</Text>
					<Text>
					Mutual Events: {mutualEvents(GetState().events, rowData).length}
					</Text>
				</View>}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		alignItems: 'center',
		justifyContent:'center',
		backgroundColor:'#cc6600',
	},
	listItem: {
		margin: 10,
	},
	textStyle: {
		color:"#cc6600"
	}
})
