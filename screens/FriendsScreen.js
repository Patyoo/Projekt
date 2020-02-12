import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';

import Header from '../components/Header.js';
import MessageService from '../services/MessageService';
import {AsyncStorage} from 'react-native';
import {timing} from 'react-native-reanimated';

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
    names: [
      {name: 'Ben', id: 1},
      {name: 'Susan', id: 2},
      {name: 'Robert', id: 3},
      {name: 'Mary', id: 4},
      {name: 'Daniel', id: 5},
      {name: 'Laura', id: 6},
      {name: 'John', id: 7},
      {name: 'Debra', id: 8},
      {name: 'Aron', id: 9},
      {name: 'Ann', id: 10},
      {name: 'Steve', id: 11},
      {name: 'Olivia', id: 12},
    ],
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

  subscribe = () => {
    this.messageService.subscribe().then(res => {
      if (res) {
        AsyncStorage.setItem('subscriptionId', res.subscriptionId).done();
        AsyncStorage.getItem('subscriptionId').then(res => console.log(res));
      } else {
        Alert.alert('Nieco je na picu');
      }
    });
  };

  getMessages = () => {
    this.messageService.retrieveMessages().then(res => {
      console.log(res);
    });
    // this.messageService.retrieveMessages().then(res => {
    //   // this.state.messagesHistory = res.map(item => {
    //   //   //console.log(item);
    //   //   return {
    //   //     messageId: item.messageId,
    //   //     data: item.data,
    //   //     publishedAt: item.publishedAt,
    //   //     publisherId: item.publisherId,
    //   //     headers: item.headers,
    //   //   };
    //   // });
    //   //console.log(this.state.messagesHistory);
    //console.log(this.state.messagesHistory);
    // });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <View style={styles.container}>
          <View style={styles.mainBox}>
            <ScrollView style={styles.ScrollViewStyle}>
              {this.state.names.map((item, index) => (
                <View key={item.id} style={styles.item}>
                  <Text>{item.name}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={styles.bottomBox}>
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
            <TouchableOpacity
              onPress={this.subscribe}
              style={styles.SubmitButton}>
              <Text>Sub</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.getMessages}
              style={styles.SubmitButton}>
              <Text>MESSAGE</Text>
            </TouchableOpacity>
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
    width: '40%',
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
  bottomBox: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
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
  },
  ScrollViewStyle: {
    width: '100%',
  },
});
