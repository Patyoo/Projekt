import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';

import ScreenOne from '../screens/ScreenOne';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import StatisticsScreen from '../screens/StatisticsScreen';

const DrawerNavigator = createDrawerNavigator({
  One: ScreenOne,
  Home: HomeScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
  Statistics: StatisticsScreen,
});

export default DrawerNavigator;
