import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ModalRegistro(props) {
    return (
        <View style={styles.modalContent}>
            <Text style={styles.title}>Registro</Text>
            <Text style={styles.text}>Número de celular</Text>
            <TextInput
                style={styles.input}
                placeholder="3317050179"
                value={props.number}
                onChangeText={props.handleInputPassword}
            />
            <Text style={styles.text}>Contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder='password'
                secureTextEntry={true}
                value={props.password}
                onChangeText={props.handleInputPassword}
            />
            <Text style={styles.text}>Repetir contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder='password'
                secureTextEntry={true}
                value={props.password}
                onChangeText={props.handleInputPassword}
            />
            <View style={styles.row}>
                <TouchableOpacity
                    accessible={true}
                    accessibilityLabel="Registrar"
                    style={styles.buttonRegistrar}
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