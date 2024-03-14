import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import ModalRegistro from './ModalRegistro';

export default function Login(props) {
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const actualizarModalIsOpen = (nuevoValor) => {
        setModalIsOpen(nuevoValor);
    }

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
                placeholder='contraseña'
                secureTextEntry={true}
                value={password}
                onChangeText={handleInputPassword}
            />
            <View style={styles.row}>
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
                    onPress={() => { setModalIsOpen(true) }}
                >
                    <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>
            </View>
            
            <Modal style={styles.modal} visible={modalIsOpen}>
                <ModalRegistro 
                    number={number}
                    actualizarModalIsOpen={actualizarModalIsOpen}
                    password={password}
                    handleInputNumber={handleInputNumber}
                    handleInputPassword={handleInputPassword}
                />
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
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
        marginHorizontal: 5
    },
    buttonText:{
        fontSize: 17,
        width: 100,
        textAlign: 'center',
    }
});