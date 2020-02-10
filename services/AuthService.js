import React, {Component} from 'react';
import {Text, View, Alert} from 'react-native';
import {AsyncStorage} from 'react-native';
export default class AuthService extends Component {
  static APIKEY =
    'ED7DC74A-5432-5A53-FF0B-4B3C625BB700/06D797EF-8242-4ABD-9794-31E3F67DD2B3';

  async login(email: string, password: string) {
    try {
      let response = await fetch(
        `https://api.backendless.com/${AuthService.APIKEY}/users/login`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            login: email,
            password: password,
          }),
        },
      );
      let responseJson = await response.json();

      if (responseJson['user-token']) {
        return {
          token: responseJson['user-token'],
          owner: responseJson.ownerId,
        };
      } else {
        return null;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async logout() {
    try {
      let response = await fetch(
        `https://api.backendless.com/${AuthService.APIKEY}/users/logout`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'user-token': `${await AsyncStorage.getItem('token')}`,
          },
        },
      );
      if (!response.ok) {
        let responseJson = await response.json();
        // Decide according to message whats bad
        return null;
      } else {
        return {
          message: 'OK',
        };
      }
    } catch (e) {
      console.log(e);
    }
  }

  async register(name: string, email: string, password: string) {
    try {
      let response = await fetch(
        `https://api.backendless.com/${AuthService.APIKEY}/users/register`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            //netraba dvakrat to iste (nazov)+netreba typ variable
          }),
        },
      );
      let responseJson = await response.json();
      console.log(responseJson);
      console.log(responseJson['user-token']);
      if (responseJson.created) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
    }
  }
}
