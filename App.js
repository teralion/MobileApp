import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignIn from './src/components/sign-in';
import HelloWorld from './src/components/hello-world';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <HelloWorld />
                <SignIn />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
