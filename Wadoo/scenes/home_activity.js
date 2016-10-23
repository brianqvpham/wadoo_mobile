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

import SwipeCards from 'react-native-swipe-cards';

const theme = getTheme();

export const HOME = "HOME"

var {
    width,
    height
} = Dimensions.get('window');

let Card = React.createClass({
    render() {
        return (
                <View style= {[styles.card, {backgroundColor: this.props.backgroundColor}]}>
                <Text>{this.props.text}</Text>
                </View>
        )
    }
})

const Cards = [
    {text: 'Event One', backgroundColor: 'red'},
    {text: 'Event Two', backgroundColor: 'purple'},
    {text: 'Event Three', backgroundColor: 'green'},
    {text: 'Event Four', backgroundColor: 'blue'},
    {text: 'Event Five', backgroundColor: 'cyan'},
    {text: 'Event Six', backgroundColor: 'orange'},
]

var CardsSwipe =  React.createClass({
    getInitialState(){
        return {
            cards: Cards
        }
    },
    handleYup (card) {
        console.log('Yup for ${card.text}')
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

export function renderHome(navigator) {
    console.log("RenderHomePage")
    var base64Icon = 'http://www.getmdl.io/assets/demos/welcome_card.jpg';
    return (
        <CardsSwipe/>
            /*
            <View style={theme.cardStyle}>
            <Image source={{uri : base64Icon}} style={theme.cardImageStyle} />
            <Text style={theme.cardTitleStyle}>A Cool Event</Text>
            <Text style={theme.cardContentStyle}>
            Event description
            </Text>

            <View style={{flex: 1, flexDirection: 'row'}}>
            <Button
            style={styles.button}
            onPress={this._handlePress}>
            Interested
            </Button>
            <Button
            style={styles.button}
            onPress={this._handlePress}>
            Not Interested
            </Button>
            </View>
        </View>
            */
);
}

function _handlePress(event){
        console.log(event);
}


class ListViewEvents extends Component {
    // Initialize the data
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'Event1', 'Event2', 'Event3', 'Event4', 'Event5'
            ])                                     
        };
    }render() {
        return (
                <View style={{paddingTop: 22}}>
                <ListView
                    dataSource= {this.state.dataSource}
                    renderRow= {(rowData) => <Text>{rowData}</Text>}
                />
                </View>
        );
    }
}



var styles = StyleSheet.create({
  button: {
      borderWidth: 1,
      borderColor: 'blue',
      width: (width/2)
  },
  list: {
    backgroundColor: '#F5FCFF',
    paddingTop: 64,
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
    outerScroll:{
        flex: 1,
        flexDirection: 'column'
    },
    row: {
        flex: 1
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 300
    },

    welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 20, marginBottom: 0,
  },
  pushLabel: {
    padding: 10,
    color: '#2196F3',
    textAlign: 'center',
  },
});
