import {AsyncStorage} from 'react-native';
import GlobalConfigManager from '../GlobalConfigManager';
import Backendless from 'backendless';

export default class MessageService {
  async sendMessage(message: string) {
    Backendless.Messaging.publish(
      'default',
      message ?? 'wow',
      new Backendless.PublishOptions({
        headers: {
          name: `${await AsyncStorage.getItem('name')}`,
        },
      }),
    );
  }

  constructor() {
    Backendless.initApp(
      GlobalConfigManager.getInstance().getApplicationID(),
      GlobalConfigManager.getInstance().getAndroid_API_key(),
    );
  }

  initialize(onMessageReceived, ctx) {
    var channel = Backendless.Messaging.subscribe('default');
    channel.addMessageListener(onMessageReceived.bind(ctx));
  }
}
