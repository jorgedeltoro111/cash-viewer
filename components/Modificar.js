import { View, Text,  TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react';

export default function Modificar() {
    const [number, setNumber] = useState('');
    const [againNewPass, setAgainNewPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [isOpen, setIsOpen] = useState(true);

    const handleInputNumber = (value) => {
        setNumber(value);
    }

    const handleInputPass = (value) => {
        setNewPass(value);
    }

    const handleInputAgainPass = (value) => {
        setAgainNewPass(value);
    }

    const info = () => {
        console.log(number);
        console.log(newPass);
        console.log(againNewPass);
        if(newPass === againNewPass){
            console.log('iguales');
        }else{
            console.log('no iguales');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Nuevo numero de celular</Text>
            <TextInput
                placeholder='Ingrese el nuevo número de celular'
                style={styles.input}
                value={number}
                onChangeText={handleInputNumber}
            />
            <Text style={styles.texto}>Nueva contraseña</Text>
            <TextInput
                placeholder='Ingrese la nueva contraseña'
                style={styles.input}
                secureTextEntry={true}
                value={newPass}
                onChangeText={handleInputPass}
            />
            <Text style={styles.texto}>Repita la nueva contraseña</Text>
            <TextInput
                placeholder='Ingrese de nuevo la nueva contraseña'
                style={styles.input}
                secureTextEntry={true}
                value={againNewPass}
                onChangeText={handleInputAgainPass}
            />
            <TouchableOpacity
                style={styles.buttonModificar}
                accessible={true}
                accessibilityLabel="Realizar cambios"
                onPress={info}
            >
                <Text style={styles.texto}>Aceptar</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    texto:{
        fontSize: 25,
        marginTop: 7
    },
    container:{
        marginTop: 60,
        alignItems: 'center',
        borderWidth: 2,
        padding: 30,
        margin: 15,
        borderRadius: 15,
        backgroundColor: 'white'
    },
    input:{
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 2,
        borderRadius: 5, 
        fontSize: 15,
        width: 300,
        textAlign: 'center',
        marginTop: 5
    },
    buttonModificar:{
        marginTop: 30,
        backgroundColor: '#0de5a8',
        borderWidth: 2, 
        borderColor: 'black',
        borderRadius: 15,
        padding: 15,
    }
});