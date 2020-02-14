import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {AsyncStorage} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

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
        AsyncStorage.getItem('token').then(res => console.log(res));
        AsyncStorage.getItem('owner').then(res => console.log(res));
        AsyncStorage.getItem('name').then(res => console.log(res));
        this.props.navigation.navigate('Home');
      } else {
        Alert.alert('Invalid username or password');
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <View style={styles.container}>
          <Text style={styles.text}>Email:</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleEmail}
          />
          <Text style={styles.text}>Password:</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handlePassword}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.login(this.state.email, this.state.password)}>
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.submitButtonText}> Register </Text>
          </TouchableOpacity>
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
  input: {
    margin: 15,
    height: 40,
    width: '90%',
    borderColor: '#7a42f4',
    borderWidth: 1,
    padding: 10,
    marginBottom: 30,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
    width: '50%',
    borderRadius: 100,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  text: {
    width: '85%',
    textAlign: 'left',
  },
});
