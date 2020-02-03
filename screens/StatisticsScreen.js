import React from 'react';
import {View, StyleSheet, Text, Picker, TouchableOpacity} from 'react-native';

import Header from '../components/Header.js';
import BigoService from '../services/BigoService';

export default class StatisticsScreen extends React.Component {
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

  render() {
    return (
      <React.Fragment>
        <Header />
        <View style={styles.container}>
          <Text>Tw</Text>
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
    backgroundColor: 'white',
    flex: 1,
  },
});
