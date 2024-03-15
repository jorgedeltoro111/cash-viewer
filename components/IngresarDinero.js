import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react';
export default function IngresarDinero() {
  const [monto, setMonto] = useState(0);
  const [concepto, setConcepto] = useState('');

  const handleInputText = (text) => {
    setConcepto(text);
  }

  const agregarDinero = (monto, concepto) => {
    monto = parseFloat(monto);
    if(monto !== 0){
      console.log(`Monto de ${monto} agregado`);    
      console.log(`Concepto: ${concepto}`)
    }else{
      console.log('No hay dinero que ingresar');
    }
  }

  const handleInputMonto = (monto) => {
    setMonto(monto);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Monto</Text>
      <TextInput
        style={styles.input}
        placeholder='230'
        onChangeText={handleInputMonto}
      />
      <Text style={styles.texto}>Concepto</Text>
      <TextInput
        style={styles.input}
        placeholder='Cine'
        onChangeText={handleInputText}
      />
      <TouchableOpacity
        accessible={true}
        accessibilityLabel="Agregar dinero"
        onPress={() => {agregarDinero(monto, concepto)}}
        style={styles.botonAgregar}
      >
        <Text style={styles.textoBoton}>Agregar dinero</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dee7e7'
  },
  texto:{
    fontSize: 25,
    marginTop: 15
  },
  input:{
    borderRadius: 5,
    borderWidth: 2,
    padding: 10,
    width: 200,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'white'
  },
  botonAgregar:{
    backgroundColor: '#61c26a',
    borderWidth: 2, 
    borderColor: 'black',
    borderRadius: 15,
    padding: 20,
    margin: 10,
    marginTop: 15,
},
textoBoton:{
  fontSize: 20
}
})