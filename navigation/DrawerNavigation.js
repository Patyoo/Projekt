import {createDrawerNavigator} from 'react-navigation-drawer';
import ScreenOne from '../screens/ScreenOne';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import LogoutScreen from '../screens/LogoutScreen';
import FriendScreen from '../screens/FriendsScreen';

const DrawerNavigator = createDrawerNavigator({
  Login: LoginScreen,
  One: ScreenOne,
  Home: HomeScreen,
  Register: RegisterScreen,
  Statistics: StatisticsScreen,
  Friends: FriendScreen,
  Logout: LogoutScreen,
});

export default DrawerNavigator;
