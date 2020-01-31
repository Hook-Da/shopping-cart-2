import React from 'react';
import { View, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Product from '../components/Products';

class ShoppingCartScreen extends React.Component {
    render() {
        return <ScrollView>
            {
                this.props.cartItems.length > 0 ? <Product products={this.props.cartItems} onPress={this.props.removeFromCart}/>:<Text>No items in your cart</Text>
            }            
        </ScrollView>
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (payload) => dispatch({ type: 'RMV_FROM_CART', payload })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartScreen);