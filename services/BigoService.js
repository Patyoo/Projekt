import {AsyncStorage} from 'react-native';
import GlobalConfigManager from '../GlobalConfigManager';

export default class BigoService {
  static APIKEY =
    GlobalConfigManager.getInstance().getApplicationID() +
    '/' +
    GlobalConfigManager.getInstance().getREST_API_key();
  static HTTPS = GlobalConfigManager.getInstance().getMainRoute();

  async createBigoAsync(brand: string) {
    try {
      let response = await fetch(
        `${BigoService.HTTPS}${BigoService.APIKEY}/data/BigoCount`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'user-token': `${await AsyncStorage.getItem('token')}`,
          },
          body: JSON.stringify({
            brand: brand,
          }),
        },
      );
      let responseJson = await response.json();
    } catch (e) {
      console.log(e);
    }
  }

  async getBigoCountUser() {
    try {
      let response = await fetch(
        `${BigoService.HTTPS}${BigoService.APIKEY}/data/BigoCount`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'user-token': `${await AsyncStorage.getItem('token')}`,
          },
        },
      );
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  }

  async getBigoInfo() {
    try {
      let response = await fetch(
        `${BigoService.HTTPS}${
          BigoService.APIKEY
        }/data/BigoCount?props=Count(ObjectId),brand&groupBy=brand`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'user-token': `${await AsyncStorage.getItem('token')}`,
          },
        },
      );
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  }
}
