/** @format */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
// import App from './App';
import { Provider } from 'react-redux';
import store from './src/store';
import ContactForm from './src/components/Form/ContactForm';

const handleSumbit = values => {
  alert(`Summitting form with value${values}`);
};

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContactForm handleSumbit={handleSumbit} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReduxFormExample', () => App);
