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
import { AddEvent } from '../redux/store'

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



const Cards = [
    {id: 0, name: "The Incredibles 2", desc: "A follow-up to the 2004 animated feature film 'The Incredibles' about the adventures of a family with superpowers", location: "Everywhere", date: "June 21, 2019"},
    {id: 1, name: "Halal Bros", desc: "Middle Eastern fare, from kebabs to stuffed pitas, in a bright cafe with seats & a take-out counter.", location: "2712 Guadalupe St, Austin, TX 78705", date: "Any time"},
    {id: 2, name: "Romeo and Juliet", desc: "They die for each other. how sweet. and foolish", location: "Everywhere", date: "June 21, 2019"},
    {id: 3, name: "HackTX", desc: "24 hour student hackathon hosted by Freetail Hackers, a student organization at The University of Texas at Austin.", location: "Omni Hotel Downtown Austin, \n 700 San Jacinto Blvd, Austin, TX 78701", date: "10/22/2016 - 10/23/2016"},
    {id: 4, name: "SmashMouth in concert", desc: "Hey Now, You're an All Star", location: "Shrek's Swamp" , date: "1/1/2020"},
    {id: 5, name: "CS 439: Operating Systems", desc: "Hello Darkness, My Old Friend", location: "The University of Teaxas at Austin", date: "Spring 2017"},
    {id: 6, name: "Voting", desc: "We the People in order to form a more perfect union...", location: "The United States", date: "11/8/2016"},
    {id: 7, name: "The Lion King", desc: "Hamlet, but only two people died", location: "Africa", date: "Yesterday"},
]

var CardsSwipe =  React.createClass({
    getInitialState(){
        return {
            cards: Cards
        }
    },
    handleYup (card) {
        AddEvent(card)
    },
    handleNope (card) {
        console.log('Nope for ${card.text}')
    },
    render() {
        return (
            <SwipeCards
            cards = {this.state.cards}

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
