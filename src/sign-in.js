import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class SignIn extends Component {
    static propTypes = {

    }

    state = {
        email: '',
        password: '',
    }

    render() {
        return (
            <View>
                <Text>Please Sign In</Text>
                <TextInput 
                    value = { this.state.email }
                    onChangeText = { this.handleEmailChange }
                    keyboardType = "email-address"
                />
                <TextInput 
                    value = { this.state.password }
                    onChangeText = { this.handlePasswordChange }
                    secureTextEntry = { true }
                />
            </View>
        )
    }

    handleEmailChange = (email) => this.setState({ email })
    handlePasswordChange = (password) => this.setState({ password })
}

export default SignIn;