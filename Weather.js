import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient} from 'expo-linear-gradient';

const weatherOptions={
    Rain:{
        iconName: 'weather-rainy',
        gradient: ['#C4D3DF', '#DFD0C4'],
        title:'Дождь',
    },
    Snow:{
        iconName: 'weather-snowy-heavy',
        gradient: ['#F3F6FB', '#AAACB0'],
        title:'Снег',
    },
    Thunderstorm:{
        iconName: 'weather-lightning',
        gradient: ['#001C3D', '#35383A'],
        title:'Гроза',
    },
    Drizzle:{
        iconName: 'weather-partly-rainy',
        gradient: ['#001C3D', '#243B55'],
        title:'Морось',
    },
    Dust:{
        iconName: 'weather-windy',
        gradient: ['#A89687', '#8799A8'],
        title:'Пыльно',
    },
    Smoke:{
        iconName: 'smog',
        gradient: ['#75766C', '#6D6C76'],
        title:'Дымно',
    },
    Haze:{
        iconName: 'weather-hazy',
        gradient: ['#BBB8B4', '#252524'],
        title:'Легкий туман',
    },
    Mist:{
        iconName: 'weather-fog',
        gradient: ['#CACFD0', '#D8C9A3'],
        title:'Туман',
    },
    Clear:{
        iconName: 'weather-sunny',
        gradient: ['#FFF380', '#808CFF'],
        title:'Солнечно',
    },
    Clouds:{
        iconName: 'weather-cloudy',
        gradient: ['#FAD6A5', '#A5C9FA'],
        title:'Облачно',
    }
}

export default function Weather({temp,condition}){
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={65} color="white" />
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.text}>{temp} С°</Text> 
                </View>

        </LinearGradient>
    );
}
    
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust", "Smoke", "Haze", "Mist", "Clear", "Clouds"]).isRequired
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    halfContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:30,
        color: "white",
    },
    title:{
        color: "white",
        fontSize: 44,
        fontWeight:"320",
        marginBottom: 10,
        textAlign: "center"
    }
})