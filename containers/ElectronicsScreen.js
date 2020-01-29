import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import { electronics } from '../Data';
import Product from './../components/Products';
import { connect } from 'react-redux';

class ElectronicsScreen extends React.Component{
    /* 
    * this.props = {
    *    screenProps: undefined
    *   navigation: {pop: ƒ, popToTop: ƒ, push: ƒ, replace: ƒ, reset: ƒ, …}
    *   addItemToCart: ƒ addItemToCart(product)
    *   __proto__: Object
    }
     */
    render(){
        console.log('%c++','background:blue',this.props);
        return <View  style={{
            justifyContent:'center',
            alignItems:'center',
            height: '100%'
        }}>
            <Product products={electronics} onPress={this.props.addItemToCart} />
        </View>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart : (product) => dispatch({ type: 'ADD_TO_CART', payload: product})
    }
}

const styles = StyleSheet.create({});

export default connect(null, mapDispatchToProps)(ElectronicsScreen);


/* export default ElectronicsScreen; */