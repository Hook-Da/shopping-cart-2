import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Product } from "./../components";
import { books } from "./../Data";
import { connect } from "react-redux";

class BooksScreen extends React.Component{
    render(){
        console.log('%c++','background:red',books);
        return <View style={{
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Product products={books} onPress={this.props.addItemToCart} />
        </View>
    }
}
const styles = StyleSheet.create({});

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product})
    }
}

export default connect(null, mapDispatchToProps)(BooksScreen);
/* export default BooksScreen; */