import { View, TextInput, Button, StyleSheet, Text} from 'react-native';
import React, { useState } from 'react';

export default function login() {
    const [inputValue, setInputValue] = useState('');
    const [inputPass, setInputPass] = useState('');
    const handleInputChange = (text) => {
        setInputValue(text);
    };
    const handleInputChangePass = (text) => {
        setInputPass(text);
    };
    const handleButtonPress = () => {
        // button pressed
        console.log('input number:', inputValue);
        console.log('Pass:', inputPass)
      };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Celular</Text>
            <TextInput
                style={styles.input}
                placeholder="3328445765"
                value={inputValue}
                onChangeText={handleInputChange}
            />
            <Text style={styles.text}>Contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder='password'
                secureTextEntry={true}
                value={inputPass}
                onChangeText={handleInputChangePass}
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