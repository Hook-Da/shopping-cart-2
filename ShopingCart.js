import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import BooksScreen from './containers/BooksScreen';
import ElectronicsScreen from './containers/ElectronicsScreen';
import HomeScreen from './containers/HomeScreen';
import ShopingCartIcon from './containers/ShopingCartIcon';
import ShoppingCartScreen from './containers/ShoppingCartScreen';

const AppStackNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions:()=>({
            title:'HomeScreen',
            headerRight:(
                <ShopingCartIcon />
            )
        })
    },
    Electronics: {
        screen: ElectronicsScreen,
        navigationOptions:()=>({
            title:'ElectronicScreen',
            headerRight:(
                <ShopingCartIcon />
            )
        })
    },
    Books: {
        screen: BooksScreen,
        navigationOptions:()=>({
            title:'BooksScreen',
            headerRight:(
                <ShopingCartIcon />
            )
        })
    },
    Shopping: {
        screen: ShoppingCartScreen,
        navigationOptions: () => ({
            title: 'ShoppingCart',
            headerRight:(
                <ShopingCartIcon />
            )
        })
    }
},{
    navigationOptions:{
        headerTitle:'Shopping App',
        headerRight:(
            <ShopingCartIcon />
        )
    }
});
const ShopingCart = createAppContainer(AppStackNavigator);
export default ShopingCart;