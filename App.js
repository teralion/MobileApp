import React from 'react';
import { StyleSheet, View } from 'react-native';
import EventList from './src/components/event-list';
import fixtures from './src/fixtures.json';

const events = Object.entries(fixtures.events).map(([uid, event]) => ({ uid, ...event }));

export default class App extends React.Component {
    render() {
        return (
            <View style={ styles.container }>
                <EventList events = { events } />
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
