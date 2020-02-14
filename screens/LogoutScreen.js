import React from 'react';
import {View, Text, TouchableOpacity, AsyncStorage, Alert} from 'react-native';

// pull in the ScreenName component from ScreenName.js
import {flexBoxes, buttons, texts, pickers, inputs} from '../ComponentStyles';
// pull in header with DrawerTrigger
import Header from '../components/Header.js';
import AuthService from '../services/AuthService';

export default class ScreenOne extends React.Component {
  constructor(props) {
    super(props);
    this.authService = new AuthService();
  }

  authService: AuthService;

  // we won't need to configure navigationOptions just yet
  static navigationOptions = {};

  logout = () => {
    this.authService.logout().then(res => {
      if (res) {
        AsyncStorage.removeItem('token');
        this.props.navigation.navigate('Login');
      } else {
        //Alert.alert('Something went wrong');
        Alert.alert('Nieco nie je gut');
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <View style={flexBoxes.container}>
          <TouchableOpacity onPress={() => this.logout()} style={buttons.round}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}
