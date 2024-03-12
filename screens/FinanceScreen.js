import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react';
import Login from '../components/Login';
import { useNavigation } from '@react-navigation/native';
import Sound from 'react-native-sound';
export default function FinanceScreen() {
    const [isLogin, setIsLogin] = useState(false);
    const navigation = useNavigation();
    const audioFileInstructions = '../audio/instructions.mp3';

    const sound = new Sound(audioFileInstructions, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('Error al cargar el sonido', error);
            return;
        }
        console.log('Carga del sonido completada');
    });

    const instructionsAudio = () => {
        sound.play((success) => {
            if (success) {
            console.log('Reproducción exitosa');
            } else {
            console.log('Error al reproducir el sonido');
            }
        });
    }

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
                !isLogin ? <Login onLogin={onLogin}/> 
                :  
                <View>
                    <TouchableOpacity 
                        accessible={true}
                        accessibilityLabel="Instrucciones"
                        style={styles.instructionsButton} 
                        onPress={instructionsAudio}
                    >
                        <Text style={styles.buttonText}>Instrucciones</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    
});