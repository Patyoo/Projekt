import {StyleSheet} from 'react-native';

const flexBoxes = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  topBox: {
    flex: 4,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  midBox: {
    flex: 6,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  bottomBox: {
    flex: 4,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  chartContainer: {
    flex: 1,
    padding: 10,
  },
  chartContainerBox: {
    height: 400,
    borderColor: '#000',
    borderWidth: 1,
  },
  messageBox: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  mainMessageBox: {
    flex: 5,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ScrollBoxStyle: {
    width: '100%',
  },
  scrollViewBox: {
    alignItems: 'center',
    padding: 20,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#7a42f4',
    width: '100%',
    flexDirection: 'column',
  },
});

const buttons = StyleSheet.create({
  round: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  action: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
    width: '50%',
    borderRadius: 100,
  },
  small: {
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
  },
});

const texts = StyleSheet.create({
  basic: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  action: {
    color: 'white',
    textAlign: 'center',
  },
  title: {
    width: '85%',
    textAlign: 'left',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
  },
  smallButtonText:{
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#7a42f4',
  },
  textStyleTime: {
    textAlign: 'left',
    width: '100%',
    backgroundColor: 'yellow',
  },
  textStyleMessage: {
    textAlign: 'left',
    width: '100%',
    backgroundColor: 'green',
    paddingLeft: 5,
  },
});

const pickers = StyleSheet.create({
  basic: {
    height: 100,
    width: 200,
  },
});

const inputs = StyleSheet.create({
  basic: {
    margin: 15,
    height: 40,
    width: '90%',
    borderColor: '#7a42f4',
    borderWidth: 1,
    padding: 10,
    marginBottom: 30,
  },
  message: {
    margin: 5,
    height: 50,
    width: '80%',
    borderColor: '#7a42f4',
    borderWidth: 1,
    padding: 10,
    color: '#7a42f4',
  },
});

export {flexBoxes, buttons, texts, pickers, inputs};
