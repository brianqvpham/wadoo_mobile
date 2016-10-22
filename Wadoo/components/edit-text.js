/* 
 * EditText Component
 */

import React, { Component } from 'react';
import { View, AppRegistry, TextInput } from 'react-native';

class EditText extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
	  <View style={this.props.containerStyle}>
        <TextInput
          style={this.props.textStyle}
		  placeholder={this.props.placeholder}
          onChangeText={(text) => {
			this.props.onChangeText(text)
			this.setState({text: text})
		  }}
		  value={this.state.text}
      />
	  </View>
    )
  }
}

export default EditText;