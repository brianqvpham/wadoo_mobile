import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {SetEvents} from '../redux/store';
import EVENTS from '../debug/events'
import 

export const EVENT = "EVENT"

export function renderEvent(navigator){
  console.log("RenderEvent")
  SetEvents(JSON.parse(EVENTS));
	return(
		<View style={styles.container}>
			<Text>This is the events page</Text>
		</View>
		<ListView
			dataSource={GetState().eventsDS}
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
	textStyle: {
		color:"#cc6600"
	}
})
