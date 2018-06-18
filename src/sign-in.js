import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class SignIn extends Component {
    static propTypes = {

    };

    state = {
        email: '',
        password: '',
    };

    render() {
        return (
            <View>
                <Text>Please Sign In</Text>
                <TextInput 
                    value = { this.state.email }
                    onChangeText = { this.handleEmailChange }
                />
                <TextInput 
                    value = { this.state.password }
                    onChangeText = { this.handlePasswordChange }
                />
            </View>
        );
    };

    handleEmailChange = (value) => (
        this.setState({
            email: value,
        });
    );

    handlePasswordChange = (value) => (
        this.setState({
            password: value,
        });
    );
};

export default SignIn;