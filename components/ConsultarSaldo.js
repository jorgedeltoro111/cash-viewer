import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react';

export default function ConsultarSaldo() {
  const [saldo, setSaldo] = useState(10);
  const data = [
    {concepto: 'coca cola', monto: 200},
    {concepto: 'pepsi', monto: 300},
    {concepto: 'seven', monto: 400},
    {concepto: 'red cola', monto: 500},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.containerHistory}>
        <Text style={styles.title}>{`Saldo actual de ${saldo} pesos`}</Text>
        <Text style={styles.history}>Historial de egresos</Text>
        {
          data.map((item, index) => (
            <Text style={styles.items} key={index}>{`${index + 1} Concepto: ${item.concepto} - monto: ${item.monto} pesos`}</Text>
          ))
        }
        <Text style={styles.history}>Historial de ingresos</Text>
        {
          data.map((item, index) => (
            <Text style={styles.items} key={index}>{`${index + 1} Concepto: ${item.concepto} - monto: ${item.monto}`}</Text>
          ))
        }
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dee7e7',
  },
  containerHistory:{
    marginTop: 100,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 15,
    backgroundColor: 'white'
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  history:{
    fontSize: 25,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    margin: 3
  },
  items:{
    fontSize: 20,
    margin: 3
  }
})