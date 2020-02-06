import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FusionCharts from 'react-native-fusioncharts';
import BigoService from '../services/BigoService';
export default class PlainColumn2D extends Component {
  state = {
    chartConfig: {
      type: 'column2d',
      width: '100%',
      height: '395',
      dataFormat: 'json',
      dataSource: {
        chart: {
          caption: 'Bigo stats',
          subCaption: 'Smoking is gut',
          xAxisName: 'Brand',
          yAxisName: 'Amount',
          numberSuffix: 'ks',
          theme: 'fusion',
        },
        data: [],
      },
    },
  };
  libraryPath = null;

  constructor(props) {
    super(props);
    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: {
        uri: 'file:///android_asset/fusioncharts.html',
      },
      //ios: require('./assets/fusioncharts.html'),
    });
    this.bigoService = new BigoService();
    this.onLoadData();
  }
  //componentDidUpdate

  onLoadData = () => {
    this.bigoService.getBigoInfo().then(res => {
      this.state.chartConfig.dataSource.data = res.map(item => {
        return {value: item.count, label: item.brand};
      });
      console.log(this.state.chartConfig.dataSource.data);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Bigo Chart</Text>

        <View style={styles.chartContainer}>
          <FusionCharts
            type={this.state.chartConfig.type}
            width={this.state.chartConfig.width}
            height={this.state.chartConfig.height}
            dataFormat={this.state.chartConfig.dataFormat}
            dataSource={this.state.chartConfig.dataSource}
            libraryPath={this.libraryPath}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  header: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
  },

  chartContainer: {
    height: 400,
    borderColor: '#000',
    borderWidth: 1,
  },
});
