import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';

import ScreenOne from '../screens/ScreenOne';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import LogoutScreen from '../screens/LogoutScreen';

const DrawerNavigator = createDrawerNavigator({
  Login: LoginScreen,
  One: ScreenOne,
  Home: HomeScreen,
  Register: RegisterScreen,
  Statistics: StatisticsScreen,
  Logout: LogoutScreen,
});

export default DrawerNavigator;
