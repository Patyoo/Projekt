import {AsyncStorage} from 'react-native';
import GlobalConfigManager from '../GlobalConfigManager';

export default class MessageService {
  static APIKEY =
    GlobalConfigManager.getInstance().getApplicationID() +
    '/' +
    GlobalConfigManager.getInstance().getREST_API_key();
  static HTTPS = GlobalConfigManager.getInstance().getMainRoute();

  async sendMessage(message: string) {
    try {
      let response = await fetch(
        `${MessageService.HTTPS}${MessageService.APIKEY}/messaging/default`,
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

  async subscribe() {
    try {
      let response = await fetch(
        `${MessageService.HTTPS}${
          MessageService.APIKEY
        }/messaging/default/subscribe`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'user-token': `${await AsyncStorage.getItem('token')}`,
          },
          body: JSON.stringify({
            publisherId: 12232,
            //publishAt: new Date().getTime(),
          }),
        },
      );
      let responseJson = await response.json();
      console.log(responseJson);

      if (responseJson.subscriptionId) {
        return {
          subscriptionId: responseJson.subscriptionId,
        };
      } else {
        return null;
      }
    } catch (e) {
      console.log(e);
    }
  }
}
