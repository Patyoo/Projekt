import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class BigoService extends Component {
  static APIKEY =
    'ED7DC74A-5432-5A53-FF0B-4B3C625BB700/06D797EF-8242-4ABD-9794-31E3F67DD2B3';

  async createBigoAsync() {
    try {
      let response = await fetch(
        `https://api.backendless.com/${BigoService.APIKEY}/data/BigoCount`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: 'Hozo',
          }),
        },
      );
      let responseJson = await response.json();
    } catch (e) {
      console.log(e);
    }
  }

  async getBigoCountUser(username: string) {
    try {
      let response = await fetch(
        `https://api.backendless.com/${
          BigoService.APIKEY
        }/data/BigoCount?where=username%20%3D%20'${username}'&props=created&sortBy=created%20desc`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      let responseJson = await response.json();
      console.log(responseJson);
    } catch (e) {
      console.log(e);
    }
  }
}
