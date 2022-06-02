import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Loading() {
    return(<View style={styles.container}>
        <Text style={styles.text}>Загрузка погоды...</Text>
    </View>);
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal:30,
        paddingVertical:100,
        backgroundColor:"#F85fab",
    },
    text:
    {
        color:"#3c5f7a",
        fontSize:30,
    }
})