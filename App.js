import React, {Component} from 'react';
import {View,Text} from 'react-native';
import store from './src/store';
import { Provider } from 'react-redux'
import SerialApp from './src/SerialApp';
import TestApp from './src/TestApp';

class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <SerialApp/>
          {/* <TestApp/> */}
        </Provider>
      )
    }
}

export default App;

