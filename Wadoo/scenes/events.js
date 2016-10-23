import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import {SetEvents, GetState} from '../redux/store';
import {EVENTSJSON} from '../debug/constants'
import {getEvents} from '../redux/reducer';

export const EVENTS = 'EVENTS'

export function renderEvents(navigator){
  console.log("RenderEvent")
  console.log(EVENTSJSON)
  SetEvents([{id: 0, 
              name: "The Incredibles 2 Premiere", 
			  desc: "The premiere of Pixar\'s The Incredibles 2", 
			  date: "June 21, 2019",
			  address: "Anywhere"},
			  {id: 1,
			   name: "Halal Bros",
			   date: "Always",
			   desc: "Middle Eastern fare, from kebabs to stuffed pitas, in a bright cafe with seats & a take-out counter.",
			   address: "2712 Guadalupe St, Austin, TX 78705"}])
	return(
		<ListView
			dataSource={GetState().eventsDS}
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
