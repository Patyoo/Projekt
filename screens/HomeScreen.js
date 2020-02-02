import React from 'react';
import {View, StyleSheet, Text, Picker, TouchableOpacity} from 'react-native';

import Header from '../components/Header.js';
import BigoService from '../services/BigoService';

export default class ScreenOne extends React.Component {
  // we won't need to configure navigationOptions just yet

  constructor(props) {
    super(props);
    this.bigoService = new BigoService();
    this.onFetch();
  }

  static navigationOptions = {};
  bigoService: BigoService;

  state = {
    counter: 0,
    bigoHistory: [],
    choice: '',
  };

  onIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
    this.bigoService.createBigoAsync(this.state.choice).then(r => console.log('CREATE BIGO'));
  };

  onFetch = () => {
    this.bigoService.getBigoCountUser().then(res => {
      this.setState({
        counter: res.length,
        bigoHistory: res.map(item => {
          return {brand: item.brand, created: new Date(item.created)};
        }),
      });
      console.log(this.state);
    });
  };

  updateChoice = choice => {
    this.setState({choice: choice});
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
            <Text style={styles.text}>Choosen:{this.state.choice}</Text>
            <Picker
              selectedValue={this.state.choice}
              onValueChange={this.updateChoice}
              style={{height: 100, width: 200}}>
              <Picker.Item label="LM" value="LM" />
              <Picker.Item label="Virginia" value="Virginia" />
              <Picker.Item label="WEST" value="West" />
            </Picker>
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
  text: {
    fontSize: 50,
    width: '100%',
    color: 'black',
    textAlign: 'center',
  },
});
