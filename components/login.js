import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import ModalRegistro from './ModalRegistro';

export default function Login(props) {
    const [numeroCelular, setNumeroCelular] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const actualizarModalIsOpen = (nuevoValor) => {
        setModalIsOpen(nuevoValor);
    }

    const handleInputNumber = (text) => {
        setNumeroCelular(text);
    };

    const handleInputPassword = (text) => {
        setContrasenia(text);
    };

    const handleButtonPress = async () => {
        try {
            const respuesta = await fetch('https://cashviewer.000webhostapp.com/usuario.php?action=iniciarSesion&numeroCelular=${numeroCelular}');
            const informacion = await respuesta.json();
            console.log(informacion);
            if (informacion.mensaje == "Inicio de sesion exitoso") {
                props.onLogin();
            } else {
                // Podría ser que lo mandé de regreso a la camara
            }
        } catch (error) {
            console.error("Error al iniciar sesion: ", error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Celular</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese su numero telefonico"
                value={numeroCelular}
                onChangeText={handleInputNumber}
            />
            <Text style={styles.text}>Contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder='ingrese su contraseña'
                secureTextEntry={true}
                value={contrasenia}
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
                    numeroCelular={numeroCelular}
                    actualizarModalIsOpen={actualizarModalIsOpen}
                    contrasenia={contrasenia}
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
        marginHorizontal: 5,
    },
    buttonText:{
        fontSize: 17,
        width: 100,
        textAlign: 'center',
    }
});