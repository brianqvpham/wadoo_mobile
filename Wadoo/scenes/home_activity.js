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

const width = Dimensions.get('window').width
const theme = getTheme();

export const HOME = "HOME"


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


export function renderHome(navigator) {
    console.log("RenderHomePage")
    var base64Icon = 'http://www.getmdl.io/assets/demos/welcome_card.jpg';
    return (
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
    );
}

function _handlePress(event){
        console.log(event);
}


var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: 'rgba(245,252,255,.98)',
    height: 56,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
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
    alignItems: 'stretch',
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
