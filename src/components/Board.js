import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Row from './Row';

export default class Board extends Component {
  render() {
    const { size, onClick } = this.props;

    return (
      <View style={[styles.container, this.props.style]}>
        {
          new Array(size).fill(0).map((row, i) => (
            <Row
              key={row}
              row={row}
              size={size}
              onClick={onClick}
            />
          ))
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
