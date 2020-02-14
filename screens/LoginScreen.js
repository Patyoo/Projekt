import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import {AsyncStorage} from 'react-native';
import {flexBoxes, buttons, texts, pickers, inputs} from '../ComponentStyles';

import Header from '../components/Header.js';
import AuthService from '../services/AuthService';

export default class ScreenTwo extends React.Component {
  static navigationOptions = {};

  constructor(props) {
    super(props);
    this.authService = new AuthService();
  }

  authService: AuthService;

  state = {
    email: '',
    password: '',
  };
  handleEmail = text => {
    this.setState({email: text});
  };
  handlePassword = text => {
    this.setState({password: text});
  };
  login = (email, pass) => {
    this.authService.login(email, pass).then(res => {
      if (res) {
        AsyncStorage.setItem('token', res.token).done();
        AsyncStorage.setItem('owner', res.owner).done();
        AsyncStorage.setItem('name', res.name).done();
        this.props.navigation.navigate('Home');
      } else {
        Alert.alert('Invalid username or password');
      }
    });
  };

  componentDidMount() {
    const {navigation} = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      this.authService.isValidUser().then(res => {
        console.log(res);
        if (res) {
          this.props.navigation.navigate('Home');
        }
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <View style={flexBoxes.container}>
          <Text style={texts.title}>Email:</Text>
          <TextInput
            style={inputs.basic}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleEmail}
          />
          <Text style={texts.title}>Password:</Text>
          <TextInput
            style={inputs.basic}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handlePassword}
          />
          <TouchableOpacity
            style={buttons.action}
            onPress={() => this.login(this.state.email, this.state.password)}>
            <Text style={texts.action}> Submit </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttons.action}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={texts.action}> Register </Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}
