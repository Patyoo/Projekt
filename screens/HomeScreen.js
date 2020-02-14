import React from 'react';
import {View, Text, Picker, TouchableOpacity} from 'react-native';

import {flexBoxes, buttons, texts, pickers} from '../ComponentStyles';
import Header from '../components/Header.js';
import BigoService from '../services/BigoService';

export default class ScreenOne extends React.Component {
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
    choice: 'LM',
  };

  onIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
    this.bigoService
      .createBigoAsync(this.state.choice)
      .then(r => console.log('CREATE BIGO'));
  };

  onFetch = () => {
    this.bigoService.getBigoCountUser().then(res => {
      this.setState({
        counter: res.length,
        bigoHistory: res.map(item => {
          return {
            brand: item.brand,
            created: new Date(item.created).toLocaleTimeString('en-US'),
          };
        }),
      });
      console.log(this.state.bigoHistory);
    });
  };

  updateChoice = choice => {
    this.setState({choice: choice});
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <View style={flexBoxes.container}>
          <View style={flexBoxes.topBox}>
            <Text style={texts.basic}>Smoked: {this.state.counter} bigos</Text>
          </View>

          <View style={flexBoxes.midBox}>
            <TouchableOpacity onPress={this.onIncrement} style={buttons.round}>
              <Text>Bigo</Text>
            </TouchableOpacity>
          </View>

          <View style={flexBoxes.bottomBox}>
            <Text style={texts.basic}>Choosen brand:{this.state.choice}</Text>
            <Picker
              selectedValue={this.state.choice}
              onValueChange={this.updateChoice}
              style={pickers.basic}>
              <Picker.Item label="LM" value="LM" />
              <Picker.Item label="Virginia" value="Virginia" />
              <Picker.Item label="WEST" value="West" />
              <Picker.Item label="Modaf" value="Modaf" />
            </Picker>
          </View>
        </View>
      </React.Fragment>
    );
  }
}
