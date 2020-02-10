import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';

import Header from '../components/Header.js';
import MessageService from '../services/MessageService';

export default class ScreenOne extends React.Component {
  constructor(props) {
    super(props);
    this.messageService = new MessageService();
  }

  static navigationOptions = {};
  messageService: MessageService;

  state = {
    message: 'kokot',
    messagesHistory: [],
  };

  sendMessage = () => {
    this.messageService
      .sendMessage(this.state.message)
      .then(r => console.log('CREATE MESSAGE'));
    this.textInput.clear();
  };
  handleMessage = text => {
    this.setState({message: text});
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.sendMessage}
            style={styles.SubmitButton}>
            <Text>Send</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Your message"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            ref={input => {
              this.textInput = input;
            }}
            onChangeText={this.handleMessage}
          />
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
    flexDirection: 'row',
  },
  input: {
    margin: 5,
    height: 50,
    width: '80%',
    borderColor: '#7a42f4',
    borderWidth: 1,
    padding: 10,
  },
  SubmitButton: {
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: '#00BCD4',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
  },
});
