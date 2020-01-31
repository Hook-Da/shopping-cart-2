import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

class HomeScreen extends React.Component{
    state = {
        title: 'STAR GATE'
    };
    /* constructor(props) {
        super(props);
        this.state = {
            title: 'Hook is here'
        }
        console.log('%c++constructor','background:yellow','here');
    } oldshool */
    componentDidMount() {
        this.setState({title: 'Hook is there'});
        console.log('%c++componentDidMount','background:red','here');
    }

    static getDerivedStateFromProps() {
        console.log('%c++getDerivedStateFromProps','background:blue','here');
    }

    componentDidUpdate() {
        console.log('%c++componentDidUpdate','background:brown',this.state);
    }
    
    componentWillUnmount() {
        console.log('%c++------','background:black','here');
    }

    render(){
        console.log('%c++','background:yellow',this.state.title);
        return <View>
            <Button title="Electronics" onPress={() => this.props.navigation.navigate('Electronics')} />
            <Button title="Books" onPress={() => this.props.navigation.navigate('Books')} />
        </View>
    }
}
const styles = StyleSheet.create({});
export default HomeScreen;