import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react' 

export default function ModalRegistro(props) {
    const registrarUsuario = async () => {
        try {
            const response = await fetch('https://cashviewer.000webhostapp.com/usuario.php?action=registrarUsuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    numeroCelular: props.numeroCelular,
                    contrasenia: props.contrasenia,
                }),
            });

            const data = await response.json();
            console.log(data); // Maneja la respuesta del servidor aquí
        } catch (error) {
            console.error('Error al registrar:', error);
        }
    };

    return (
        <View style={styles.modalContent}>
            <Text style={styles.title}>Registro</Text>
            <Text style={styles.text}>Número de celular</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese su numero de celular"
                placeholderTextColor="#c1c9c8"
                value={props.numeroCelular}
                onChangeText={props.handleInputNumber}
            />
            <Text style={styles.text}>Contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder='Ingrese una nueva contraseña'
                placeholderTextColor="#c1c9c8"
                secureTextEntry={true}
                value={props.contrasenia}
                onChangeText={props.handleInputPassword}
            />
            <Text style={styles.text}>Repetir contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder='Repita la nueva contraseña'
                placeholderTextColor="#c1c9c8"
                secureTextEntry={true}
                value={props.contrasenia}
                onChangeText={props.handleInputPassword}
            />
            <View style={styles.row}>
                <TouchableOpacity
                    accessible={true}
                    accessibilityLabel="Registrar"
                    style={styles.buttonRegistrar}
                    onPress={registrarUsuario}
                >
                    <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    accessible={true}
                    accessibilityLabel="Cerrar"
                    onPress={()=>{
                            props.actualizarModalIsOpen(false)
                        }}
                    style={styles.buttonCerrar}
                >
                    <Text style={styles.buttonText}>Cerrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        
    },
    title:{
        fontSize: 35
    },
    modalContent:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#dee7e7'
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
    buttonRegistrar:{
        marginTop: 30,
        backgroundColor: '#63d3ff',
        borderWidth: 2, 
        borderColor: 'black',
        borderRadius: 15,
        padding: 15,
        marginHorizontal: 5
    },
    buttonCerrar:{
        marginTop: 30,
        backgroundColor: 'red',
        borderWidth: 2, 
        borderColor: 'black',
        borderRadius: 15,
        padding: 15,
    },
    buttonText:{
        fontSize: 17,
        width: 100,
        textAlign: 'center',
    }
});