import React, {Component} from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native';

class PickerExample extends Component {
  state = {user: ''};
  updateUser = user => {
    this.setState({user: user});
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Choosen:{this.state.user}</Text>
        <Picker
          selectedValue={this.state.user}
          onValueChange={this.updateUser}
          style={{height: 100, width: 200}}>
          <Picker.Item label="LM" value="LM" />
          <Picker.Item label="Virginia" value="Virginia" />
          <Picker.Item label="WEST" value="West" />
        </Picker>
      </View>
    );
  }
}
export default PickerExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    width: '100%',
    color: 'black',
    textAlign: 'center',
  },
});
