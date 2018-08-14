import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        onClick={this.props.onClick}
        activeOpacity={0.7}
        style={{
          flex: 1,
          borderRightColor: 'gray',
          borderRightWidth: 1,
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text style={{}}>{this.props.value}</Text>
      </TouchableOpacity>
    );
  }
}