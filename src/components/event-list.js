import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class EventList extends Component {
    static propTypes = {

    };

    render() {
        return (
            <View>
                { this.props.events.map((event) => (
                    <Text key = { event.uid }>{ event.title }</Text>
                ))}
            </View>
        );
    };
};

const styles = StyleSheet.create({
    
})

export default EventList;