import { View, Text } from 'react-native'
import React from 'react'

export default function Registro() {
  return (
    <View>
      <Text>Registro</Text>
      <TouchableOpacity>
            <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
    </View>
  )
}