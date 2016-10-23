import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import {SetEvents, GetState, SetUser} from '../redux/store';
import {EVENTSJSON} from '../debug/constants'
import {FRIENDS} from './friends'
import Button from 'react-native-button'

export const EVENTS = 'EVENTS'

export function renderEvents(navigator){
  console.log("RenderEvent")
	return(	<View style={styles.container}>
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
				containerStyle={[styles.buttonContainer, {backgroundColor: '#9DE0AD'}]}
				style={styles.buttontext}>
				Events
			</Button>
			<Button 
				containerStyle={styles.buttonContainer}
				style={styles.buttontext}
				onPress={() => {
					navigator.replace({name: FRIENDS})
				}}>
				Friends
			</Button>
			</View>
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


