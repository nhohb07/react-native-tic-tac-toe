import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';

export default class Row extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { row, size, onClick } = this.props;

    return (
      <View style={styles.container}>
        {
          new Array(size).fill(
            <Button
              key={`b-${row}`}
              row={row}
              onClick={onClick}
              value={1}
            />
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
});
