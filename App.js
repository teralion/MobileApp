import React from 'react';
import { StyleSheet, View, Image, Platform } from 'react-native';
import EventList from './src/components/event-list';
import SectionedEventList from './src/components/section-list';
import fixtures from './src/fixtures';
import SignIn from './src/components/sign-in';
import img from './assets/images/logo.png';

const events = Object.entries(fixtures.events).map(([uid, event]) => ({ uid, ...event }));

export default class App extends React.Component {
    render() {
        return (
            <View style = { styles.container } >
                <Image 
                    style = { styles.image } 
                    source = { img } 
                    resizeMode = { Image.resizeMode.contain }
                />
                <SectionedEventList events = { events } />
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
        paddingTop: 30,
        paddingBottom: 20,
    },
    image: {
        width: "100%",
        height: 100
    }
});
