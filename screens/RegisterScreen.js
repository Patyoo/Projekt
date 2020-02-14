import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';

import {flexBoxes, buttons, texts, pickers, inputs} from '../ComponentStyles';
import Header from '../components/Header.js';
import AuthService from '../services/AuthService';

export default class RegisterScreen extends React.Component {
  static navigationOptions = {};

  constructor(props) {
    super(props);
    this.authService = new AuthService();
  }

  authService: AuthService;

  state = {
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  };
  handleEmail = text => {
    this.setState({email: text});
  };
  handlePassword = text => {
    this.setState({password: text});
  };
  handleConfirmedPassword = text => {
    this.setState({confirmPassword: text});
  };
  handleName = text => {
    this.setState({name: text});
  };
  register = (email, pass, confirmPass, name) => {
    if (pass == confirmPass) {
      this.authService.register(name, email, pass).then(res => {
        if (res) {
          this.props.navigation.navigate('Login');
        } else {
          Alert.alert('Invalid username or password');
        }
      });
    } else {
      console.log('Zle');
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <View style={flexBoxes.container}>
          <Text style={texts.title}>Name:</Text>
          <TextInput
            style={inputs.basic}
            underlineColorAndroid="transparent"
            placeholder="Name"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleName}
          />
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
          <Text style={texts.title}>Confirm password:</Text>
          <TextInput
            style={inputs.basic}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleConfirmedPassword}
          />
          <TouchableOpacity
            style={buttons.action}
            onPress={() =>
              this.register(
                this.state.email,
                this.state.password,
                this.state.confirmPassword,
                this.state.name,
              )
            }>
            <Text style={texts.action}> Submit </Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}
