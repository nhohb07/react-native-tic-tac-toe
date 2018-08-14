import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Board from './Board';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _handleClick = (row, col) => {

  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Game status</Text>
        </View>

        <Board
          size={this.props.size}
          onClick={this._handleClick}
          style={styles.board}
        />

        <View>
          <Text>Game status</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  board: {
    borderTopColor: 'gray',
    borderTopWidth: 1,
    borderLeftColor: 'gray',
    borderLeftWidth: 1,
  }
});
