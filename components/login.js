import { View, TextInput, Button, StyleSheet, Text} from 'react-native';
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
        if(number === '1' && password === '1'){
            props.onLogin();
        }else{
            console.log('Contraseña incorrecta');
        }
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
            <View style={styles.buttonContainer}>
                <Button
                    color='white'
                    title="Ingresar"
                    onPress={handleButtonPress}
                />
            </View>
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
        fontSize: 20
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
    buttonContainer:{
        marginTop: 30,
        backgroundColor: '#61c26a',
        borderWidth: 2, 
        borderColor: 'black',
        borderRadius: 15,
        width: 150
    }
});