import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react';
import Login from '../components/Login';
import { useNavigation } from '@react-navigation/native';
export default function FinanceScreen() {
    const [isLogin, setIsLogin] = useState(false);
    const navigation = useNavigation();
    
    useEffect(() => {//cada vez que isLogin cambie de estado esta hara las instrucciones que estan indicadas en la funcion useEffect.
        if (isLogin) {
            navigation.navigate('Finanzas');
        }
    }, [isLogin]);
    
    const onLogin = () => {
        setIsLogin(true);
    }
    return (
        <View>
            {
                !isLogin ? <Login onLogin={onLogin}/> :  null
            }
        </View>
    )
}