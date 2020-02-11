import React from 'react';
import {TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import icon from '../assets/images/bigoLogo.png';

// dorobit ikonu import Icon from 'react-native-vector-icons/FontAwesome';

import {withNavigation} from 'react-navigation';
import {DrawerActions} from 'react-navigation-drawer';

class DrawerTrigger extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.trigger}
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer());
        }}>
        <View>
          <Image style={{width: 150, height: 50}} source={icon} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  trigger: {
    marginLeft: 27.5,
    borderRadius: 30,
    width: 60,
    height: 60,
  },
});

export default withNavigation(DrawerTrigger);
