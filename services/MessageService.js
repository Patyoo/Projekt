import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
export default class MessageService extends Component {
  static APIKEY =
    'ED7DC74A-5432-5A53-FF0B-4B3C625BB700/06D797EF-8242-4ABD-9794-31E3F67DD2B3';

  async sendMessage(message: string) {
    try {
      let response = await fetch(
        `https://api.backendless.com/${
          MessageService.APIKEY
        }/messaging/default`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'user-token': `${await AsyncStorage.getItem('token')}`,
          },
          body: JSON.stringify({
            message: message,
            publisherId: 12232,
            headers: {key1: message, key2: message},
            //publishAt: new Date().getTime(),
          }),
        },
      );
      let responseJson = await response.json();
      console.log(responseJson);

      //   if (responseJson.status) {
      //     console.log('KOKOT');
      //   } else {
      //     console.log('PICA');
      //     return null;
      //   }
    } catch (e) {
      console.log(e);
    }
  }
}
