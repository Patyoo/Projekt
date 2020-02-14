import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';

import Header from '../components/Header.js';
import MessageService from '../services/MessageService';
import {AsyncStorage} from 'react-native';

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
    console.log(messages);
    //console.log(messages.message);
    this.setState(state => {
      return {
        messagesHistory: [
          ...state.messagesHistory,
          {
            message: messages.message,
            time: messages.timestamp,
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
        <View style={styles.container}>
          <View style={styles.mainBox}>
            <ScrollView style={styles.ScrollViewStyle}>
              {this.state.messagesHistory.map((item, index) => (
                <View key={item.time} style={styles.item}>
                  <Text style={styles.textStyleTime}>
                    {new Date(item.time).toLocaleTimeString('en-US')}
                  </Text>
                  <Text style={styles.textStyleTime}>{this.state.name}</Text>
                  <Text style={styles.textStyleMessage}>{item.message} </Text>
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={styles.bottomBox}>
            <TouchableOpacity
              onPress={this.sendMessage}
              style={styles.SubmitButton}>
              <Text style={styles.textSyle}>Send</Text>
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
    flexDirection: 'column',
  },
  input: {
    margin: 5,
    height: 50,
    width: '80%',
    borderColor: '#7a42f4',
    borderWidth: 1,
    padding: 10,
    color: '#7a42f4',
  },
  SubmitButton: {
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
  },
  bottomBox: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  mainBox: {
    flex: 5,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  item: {
    alignItems: 'center',
    padding: 20,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#7a42f4',
    width: '100%',
    flexDirection: 'column',
  },
  ScrollViewStyle: {
    width: '100%',
  },
  textSyle: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#7a42f4',
  },
  textStyleTime: {
    textAlign: 'left',
    width: '100%',
    backgroundColor: 'yellow',
  },
  textStyleMessage: {
    textAlign: 'left',
    width: '100%',
    backgroundColor: 'green',
    paddingLeft: 5,
  },
});
