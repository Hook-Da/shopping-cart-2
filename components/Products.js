import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Product = ({products, onPress}) => {
    console.log('%c++','background:limegreen',products.products);
    return products.map((item, index) => {
        return (
            <View key={index} style={{ padding: 20 }}>
                <Button onPress={(item)=> onPress(item) } title={item.name + " - " + item.price} />
            </View>
        )
    })
}

const styles = StyleSheet.create({});

export default Product;