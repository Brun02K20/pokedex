import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { LoginForm } from '../components/auth/LoginForm.js';
import { UserData } from '../components/auth/UserData.js';

const Account = () => {
    const auth = null;

    return (
        <View>
            {auth ? <UserData /> : <LoginForm />}
        </View>
    )
}

export { Account }