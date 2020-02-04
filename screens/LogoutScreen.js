import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Alert,
} from 'react-native';

// pull in the ScreenName component from ScreenName.js
import ScreenName from '../components/ScreenName.js';

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
        this.props.navigation.navigate('Home');
      } else {
        //Alert.alert('Something went wrong');
        Alert.alert('Pca');
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.logout()} style={styles.button}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
