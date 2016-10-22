import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from 'react-native-button'
import {FBLogin, FBLoginManager} from 'react-native-facebook-login'
import EditText from '../components/edit-text'

export const LOGIN = "LOGIN"



export function renderLogin(navigator){
	console.log("RenderLogin")
	return(
		<Login />
	)
}

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = { username: "", password: ""};
  }
  
  render() {
    return(
	  <View style={styles.container}>
		<FBLogin style={{ marginBottom: 10, }}
        ref={(fbLogin) => { this.fbLogin = fbLogin }}
        permissions={["email","user_friends"]}
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        onLogin={function(data){
          console.log("Logged in!");
          console.log(data);
          _this.setState({ user : data.credentials });
        }}
        onLogout={function(){
          console.log("Logged out.");
          _this.setState({ user : null });
        }}
        onLoginFound={function(data){
          console.log("Existing login found.");
          console.log(data);
          _this.setState({ user : data.credentials });
        }}
        onLoginNotFound={function(){
          console.log("No user logged in.");
          _this.setState({ user : null });
        }}
        onError={function(data){
          console.log("ERROR");
          console.log(data);
        }}
        onCancel={function(){
          console.log("User cancelled.");
        }}
        onPermissionsMissing={function(data){
          console.log("Check permissions!");
          console.log(data);
        }}
      />
	  </View>
	)
  }
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		alignItems: 'center',
		justifyContent:'center',
		backgroundColor:'#e1c18f',
	},
	textStyle: {
		color:"#cc6600"
	},
	editContainer:{
		width:360,
		backgroundColor:"#ff66ff",
	},
	editText: {
		color:'#009900',
	}
})