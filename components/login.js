import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


export default function Login(props) {
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleInputNumber = (text) => {
        setNumber(text);
    };

    const handleInputPassword = (text) => {
        setPassword(text);
    };

    const handleButtonPress = () => {
        console.log('Number:', number);
        console.log('Password:', password)
        props.onLogin();
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Celular</Text>
            <TextInput
                style={styles.input}
                placeholder="3328445765"
                value={number}
                onChangeText={handleInputNumber}
            />
            <Text style={styles.text}>Contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder='password'
                secureTextEntry={true}
                value={password}
                onChangeText={handleInputPassword}
            />
            <TouchableOpacity 
                onPress={handleButtonPress} 
                style={styles.buttonIngresar}
                accessible={true}
                accessibilityLabel="Ingresar"
            >
                <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonRegistrar}
                accessible={true}
                accessibilityLabel="Registrar"
            >
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },  
    text:{
        margin: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    input:{
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 2,
        borderRadius: 5, 
        fontSize: 15,
        width: 200,
        textAlign: 'center'
    },
    buttonIngresar:{
        marginTop: 30,
        backgroundColor: '#61c26a',
        borderWidth: 2, 
        borderColor: 'black',
        borderRadius: 15,
        padding: 15,
    },
    buttonRegistrar:{
        marginTop: 30,
        backgroundColor: '#63d3ff',
        borderWidth: 2, 
        borderColor: 'black',
        borderRadius: 15,
        padding: 15,
    },
    buttonText:{
        fontSize: 17,
        width: 100,
        textAlign: 'center'
    }
});