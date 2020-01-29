import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

class HomeScreen extends React.Component{

    render(){
        return <View>
            <Button title="Electronics" onPress={() => this.props.navigation.navigate('Electronics')} />
            <Button title="Books" onPress={() => this.props.navigation.navigate('Books')} />
        </View>
    }
}
const styles = StyleSheet.create({});
export default HomeScreen;