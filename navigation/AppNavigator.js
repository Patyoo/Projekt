import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import DrawerNavigator from './DrawerNavigation';

export default createAppContainer(
  createSwitchNavigator({
    // Additional routes such as a login route could
    // be added here:
    // Login: LoginNavigator,
    Main: DrawerNavigator,
  }),
);
