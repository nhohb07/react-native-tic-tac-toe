import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Game from './src/components/Game';

export default class App extends Component {
  render() {
    return (
      <Game
        size={3}
      />
    );
  }
}