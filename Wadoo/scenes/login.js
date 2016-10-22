import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
export const LOGIN = "LOGIN"

export function renderLogin(navigator){
	console.log("RenderLogin")
	return(
		<View style={styles.container}>
			<Text>This is a login page</Text>
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