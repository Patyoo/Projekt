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
        <View style={styles.container}>
          <Text style={styles.text}>Name:</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Name"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleName}
          />
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
          <Text style={styles.text}>Confirm password:</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleConfirmedPassword}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() =>
              this.register(
                this.state.email,
                this.state.password,
                this.state.confirmPassword,
                this.state.name,
              )
            }>
            <Text style={styles.submitButtonText}> Submit </Text>
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
    margin: 45,
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
