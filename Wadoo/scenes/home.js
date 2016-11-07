'use stright';
import React, { Component } from 'react';
import {
    StyleSheet,
    ListView,
    TouchableOpacity,
    View,
    ScrollView,
    Image,
    Dimensions,
    Text } from 'react-native';

import {
    MKButton,
    MKColor,
    MKIconToggle,
    getTheme,
} from 'react-native-material-kit';

import Button from 'react-native-button'
import { ConfirmEvent, PassEvent } from '../redux/store'

import SwipeCards from 'react-native-swipe-cards';

import {EVENTS} from './events'
import {FRIENDS} from './friends'

export const HOME = "HOME"

export function renderHome(navigator) {
    console.log("RenderHomePage")
    return (
		<View style={styles.container}>
			<View style={styles.buttonRow}>
			<Button 
				containerStyle={[styles.buttonContainer, {backgroundColor: '#9DE0AD'}]}
				style={styles.buttontext}>
				Swipe
			</Button>
			<Button 
				containerStyle={styles.buttonContainer}
				style={styles.buttontext}
				onPress={() => {
					navigator.push({name: EVENTS})
				}}>
				Events
			</Button>
			<Button 
				containerStyle={styles.buttonContainer}
				style={styles.buttontext}
				onPress={() => {
					navigator.push({name: FRIENDS})
				}}>
				Friends
			</Button>
			</View>
        <CardsSwipe/>
		</View>
	)
}



let Card = React.createClass({
    render() {
        return (
                <View style= {styles.card}>
                <Text style={{textAlign: 'center'}}>{this.props.name}</Text>
				<Text style={{textAlign: 'center'}}>{this.props.desc}</Text>
				<Text style={{textAlign: 'center'}}>{this.props.location}</Text>
				<Text style={{textAlign: 'center'}}>{this.props.date}</Text>
                </View>
        )
    }
})

var CardsSwipe =  React.createClass({
    handleYup (card) {
        ConfirmEvent(card)
    },
    handleNope (card) {
        PassEvent(card)
    },
    render() {
        return (
            <SwipeCards
            cards = {GetState().needVotes}

            renderCard={(cardData) => <Card {...cardData} />}
            renderNoMoreCards={() => <NoMoreCards />}

            handleYup={this.handleYup}
            handleNope={this.handleNope}
                />
        )
    }
})

var styles = StyleSheet.create({
  list: {
    backgroundColor: '#F5FCFF',
    paddingTop: 64,
  },
  container: {
	flex: 1,
    flexDirection: 'column'
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
    outerScroll:{
        flex: 1,
        flexDirection: 'column'
    },
    row: {
		
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 350,
		padding: 25,
		backgroundColor:'#45ADA8',
	}
});
