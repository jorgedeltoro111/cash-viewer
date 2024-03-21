import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

export default function SettingsScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Información de usuario</Text>
      <Text style={styles.text}>ID de usuario: 5</Text>
      <Text style={styles.text}>Numero de celular: 3317050177</Text>
      <TouchableOpacity
          style={styles.button}
          accessible={true}
          accessibilityLabel="Modificar contraseña o numero de celular"
          onPress={() => { navigation.navigate('Configuración de usuario')}}
      >
          <Text style={styles.buttonText}>Modificar</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    marginTop: 60,
    alignItems: 'center',
    borderWidth: 2,
    padding: 30,
    margin: 15,
    borderRadius: 15,
    backgroundColor: 'white'
  },
  text:{
    margin: 15,
    fontSize: 20,
  },
  button:{
    marginTop: 30,
    backgroundColor: '#63d3ff',
    borderWidth: 2, 
    borderColor: 'black',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 5,
  },
  buttonText:{
    fontSize: 20,
    width: 200,
    textAlign: 'center'
  }

});