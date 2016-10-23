import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {getEvents} from '../redux/reducer';

export const EVENT = "EVENT"

export function renderEvent(navigator){
	console.log("RenderEvent")
  getEvents();
	return(
		<View style={styles.container}>
			<Text>This is the events page</Text>
		</View>
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
