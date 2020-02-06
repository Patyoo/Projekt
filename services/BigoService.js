import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {AsyncStorage} from 'react-native';

export default class BigoService extends Component {
  static APIKEY =
    'ED7DC74A-5432-5A53-FF0B-4B3C625BB700/06D797EF-8242-4ABD-9794-31E3F67DD2B3';

  async createBigoAsync(brand: string) {
    try {
      let response = await fetch(
        `https://api.backendless.com/${BigoService.APIKEY}/data/BigoCount`,
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
        `https://api.backendless.com/${BigoService.APIKEY}/data/BigoCount`,
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
        `https://api.backendless.com/${
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
