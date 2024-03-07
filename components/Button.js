import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons'

export default function Button({title, onPress, icon, color}){
    return(
        <TouchableOpacity onPress={onPress}>
            <Entypo name={icon} size={28} color={color ? color : '#f1f1f1'}/>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    title:{
        fontWeight: 'bold',
        fontSize: 20
    }
});