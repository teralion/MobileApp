import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, SectionList } from 'react-native';
import Card from './common/card';

class SectionedEventList extends Component {
    static propTypes = {
        
    };

    render() {
        return (
            <SectionList
                renderItem={({ item, index }) => <Card key={index}><Text>{item}</Text></Card> }
                renderSectionHeader={({section: {title}}) => (
                    <Text style = { styles.header }>{ title }</Text>
                )}
                sections = {[
                    {title: 'Title2', data: ['item3', 'item4'] },
                    {title: 'Title1', data: ['item1', 'item2', 'item2', 'item2', 'item2', 'item2', 'item2', 'item2']},
                    {title: 'Title4', data: ['item1', 'item2', 'item2', 'item2','item2', 'item2']},
                    {title: 'Title15', data: ['item1', 'item2', 'item2', 'item2']},
                    {title: 'Title3', data: ['item5', 'item6','item6','item6','item6']},
                    {title: 'Title82', data: ['item5', 'item6','item6','item6','item6', 'item6', 'item6']},
                ]}
                keyExtractor={(item, index) => item + index}
            />
        );
    };
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F0F0F0',
        height: 40,
        width: "100%",
        lineHeight: 40,
        marginBottom: 5,
        shadowOffset: {
            height: 2, width: 0
        },
        shadowOpacity: 0.3,
        elevation: 3
    }
})

export default SectionedEventList;