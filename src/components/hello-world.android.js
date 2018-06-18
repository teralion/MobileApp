import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class HelloWorld extends Component {
    static propTypes = {

    };

    render() {
        return (
            <View>
                <Text>Hello, android!</Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    
})

export default HelloWorld;