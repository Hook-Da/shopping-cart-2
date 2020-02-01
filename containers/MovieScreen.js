import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { height, width } from '../constants';
import { ImageCard } from './../components';

const url = 'https://gitlab.com/gHashTag/react-native-init-data/raw/master/db.json';

class MovieScreen extends React.Component {
    state = {
        movies: []
    };

    componentDidMount = async () => {
        console.log('%c++ height width','background:violet', height, width);
        try{
            const response = await fetch(url);
            Promise.all([response.json()]).then((values) => {
                console.log('%c++Promise.all()','background:limegreen', values);
                this.setState({movies: values[0]});
            }).catch((err) => {
                console.error('%c++promise','background:red',err);
            })
        } catch (e) {
            console.error('%c++componentDidMount','background:red',e);
        }
    }

    render() {
        return this.state.movies.map(( movie) => {
                return <ImageCard key={movie.id} movie={movie} />
            })
    }
}

export default MovieScreen;