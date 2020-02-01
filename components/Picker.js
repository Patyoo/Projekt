import React, {Component} from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native';

class PickerExample extends Component {
  state = {choice: ''};
  updateUser = choice => {
    this.setState({choice: choice});
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Choosen:{this.state.choice}</Text>
        <Picker
          selectedValue={this.state.choice}
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
