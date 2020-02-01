import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Header from '../components/Header.js';
import Picker from '../components/Picker';

export default class ScreenOne extends React.Component {
  // we won't need to configure navigationOptions just yet
  static navigationOptions = {};
  state = {
    counter: 0,
  };

  onIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <View style={styles.container}>
          <View style={styles.topBox}>
            <Text style={styles.counter}>Counter: {this.state.counter}</Text>
          </View>

          <View style={styles.midBox}>
            <TouchableOpacity onPress={this.onIncrement} style={styles.button}>
              <Text>Wow</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomBox}>
            <Picker />
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    flex: 1,
  },
  topBox: {
    flex: 4,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  midBox: {
    flex: 6,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  bottomBox: {
    flex: 4,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  counter: {
    fontSize: 25,
  },
  button: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
});
