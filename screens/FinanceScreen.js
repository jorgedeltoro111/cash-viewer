import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
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

    const cerrarSesion = () => {
        setIsLogin(false);
        navigation.navigate('Finanzas');
    }

    return (
        <View style={styles.container}>
            {
                !isLogin ? <Login onLogin={onLogin}/> 
                :  
                <View>
                    <TouchableOpacity 
                        accessible={true}
                        accessibilityLabel="Ingresar dinero"
                        style={styles.buttonIngreso} 
                        onPress={() => {navigation.navigate('Ingresar Dinero')}}
                    >
                        <Text style={styles.buttonText}>Ingresar dinero</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        accessible={true}
                        accessibilityLabel="Retirar dinero"
                        onPress={() => {navigation.navigate('Retirar Dinero')}}
                        style={styles.buttonSacar} 
                    >
                        <Text style={styles.buttonText}>Retirar dinero</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        accessible={true}
                        accessibilityLabel="Consultar saldo actual"
                        style={styles.buttonConsulta} 
                        onPress={() => {navigation.navigate('Consultar Saldo')}}
                    >
                        <Text style={styles.buttonText}>Consultar saldo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        accessible={true}
                        accessibilityLabel="Cerrar sesión"
                        style={styles.buttonCerrarSesion} 
                        onPress={cerrarSesion}
                    >
                        <Text style={styles.buttonText}>Cerrar sesión</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#dee7e7'
    },
    buttonIngreso:{
        marginTop: 100,
        backgroundColor: '#61c26a',
        borderWidth: 2, 
        borderColor: 'black',
        borderRadius: 15,
        padding: 15,
        margin: 10,
    },
    buttonSacar:{
        marginTop: 100,
        backgroundColor: '#fa2a3a',
        borderWidth: 2, 
        borderColor: 'black',
        borderRadius: 15,
        padding: 15,
        margin: 10,
    },
    buttonConsulta:{
        marginTop: 100,
        backgroundColor: '#7ff1e0',
        borderWidth: 2, 
        borderColor: 'black',
        borderRadius: 15,
        padding: 15,
        margin: 10,
    },
    buttonCerrarSesion:{
        marginTop: 100,
        backgroundColor: '#9d9382',
        borderWidth: 2, 
        borderColor: 'black',
        borderRadius: 15,
        padding: 15,
        margin: 10,
    },
    buttonText:{
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});