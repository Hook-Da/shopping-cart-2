import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation'

/* class ShopingCartIcon extends React.Component{

    render(){
        return <View style={{ padding:5 }}>
            <View style= {{ position: 'absolute', height:30, width: 30, borderRadius: 15, backgroundColor: 'limegreen'}}>
                <Text>0</Text>
            </View>
            <Icon name="ios-cart" size={30} />
        </View>
    }
} */
const ShopingCartIcon = (props) => {
    console.log('%c++','background:red',props);
    return <TouchableOpacity onPress={() => props.navigation.navigate('Shopping')}>
        <View style={{ padding:5 }} >
            <View style= {{ 
                position: 'absolute', 
                height:30, 
                width: 30, 
                borderRadius: 15, 
                backgroundColor: 'rgba(13, 240, 40,.7)', 
                right: 15, 
                bottom: 15,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1
                }}>
                <Text style={{color:'#fff', fontWeight:'500'}}>{props.cartItems.length}</Text>
            </View>
            <Icon name="ios-cart" size={30}   />
        </View>
        </TouchableOpacity>
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

export default connect(mapStateToProps)(withNavigation(ShopingCartIcon));

const styles = StyleSheet.create({});
/* export default ShopingCartIcon; */