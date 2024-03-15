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
    <View>
      <Text style={styles.texto}>Monto</Text>
      <TextInput
        style={styles.inputMonto}
        placeholder='230'
        onChangeText={handleInputMonto}
      />
      <Text style={styles.texto}>Concepto</Text>
      <TextInput
        style={styles.inputConcepto}
        placeholder='Cine'
        onChangeText={handleInputText}
      />
      <TouchableOpacity
        accessible={true}
        accessibilityLabel="Agregar dinero"
        onPress={() => {agregarDinero(monto, concepto)}}
        style={styles.botonAgregar}
      >
        <Text style={styles.texto}>Agregar dinero</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({

})