import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';

import Header from '../components/Header.js';
import MessageService from '../services/MessageService';
import {AsyncStorage} from 'react-native';
import {inputs, flexBoxes, buttons, texts} from '../ComponentStyles.js';

export default class ScreenOne extends React.Component {
  constructor(props) {
    super(props);
    this.messageService = new MessageService();
    this.messageService.initialize(this.onMessageReceived, this);
  }

  static navigationOptions = {};
  messageService: MessageService;

  state = {
    message: 'kokot',
    messagesHistory: [],
    name: '',
  };

  async onMessageReceived(messages) {
    // console.log(messages.message);
    this.setState(state => {
      return {
        messagesHistory: [
          ...state.messagesHistory,
          {
            message: messages.message,
            time: messages.timestamp,
            name: messages.headers.name,
          },
        ],
      };
    });
    //console.log(this.state.messagesHistory);
  }

  sendMessage = () => {
    this.messageService.sendMessage(this.state.message);
  };
  handleMessage = text => {
    this.setState({message: text});
  };

  componentDidMount = () =>
    AsyncStorage.getItem('name').then(value => this.setState({name: value}));

  render() {
    return (
      <React.Fragment>
        <Header />
        <View style={flexBoxes.container}>
          <View style={flexBoxes.mainMessageBox}>
            <ScrollView style={flexBoxes.ScrollBoxStyle}>
              {this.state.messagesHistory.map((item, index) => (
                <View key={item.time} style={flexBoxes.scrollViewBox}>
                  <Text style={texts.textStyleTime}>
                    {new Date(item.time).toLocaleTimeString('en-US')}
                  </Text>
                  <Text style={texts.textStyleTime}>{item.name}</Text>
                  <Text style={texts.textStyleMessage}>{item.message} </Text>
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={flexBoxes.messageBox}>
            <TouchableOpacity onPress={this.sendMessage} style={buttons.small}>
              <Text style={texts.smallButtonText}>Send</Text>
            </TouchableOpacity>
            <TextInput
              style={inputs.message}
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
        </View>
      </React.Fragment>
    );
  }
}
