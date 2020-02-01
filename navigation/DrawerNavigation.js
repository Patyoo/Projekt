import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';

import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const DrawerNavigator = createDrawerNavigator({
  One: ScreenOne,
  Two: ScreenTwo,
  Home: HomeScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default DrawerNavigator;
