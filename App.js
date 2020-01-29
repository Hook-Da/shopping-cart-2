/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import { Provider } from 'react-redux';
import store from './store';

import ShopingCart from './ShopingCart';

const App = () => {
  return (
    <Provider store={store}>
      <ShopingCart />
    </Provider> 
  );
};

const styles = StyleSheet.create({
  
});

export default App;
