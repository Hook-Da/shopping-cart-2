import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ImageCard = ({movie}) => {
    return <View>
        <Text>{movie.name}</Text>
    </View>
}

const styles = StyleSheet.create({});