import react from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Alert, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient, Feather } from 'expo-linear-gradient';

const weatherOptions={
    Rain:{
        iconName: 'rainy-sharp',
    },
    Snow:{
        iconName: 'cloud-snow',
    },
    Thunderstorm:{
        iconName: 'rainy-sharp',
    },
    Drizzle:{
        iconName: 'rainy-sharp',
    },
    Dust:{
        iconName: 'rainy-sharp',
    },
    Smoke:{
        iconName: 'rainy-sharp',
    },
    Haze:{
        iconName: 'rainy-sharp',
    },
    Mist:{
        iconName: 'rainy-sharp',
    },
    Clear:{
        iconName: 'rainy-sharp',
    },
    Clouds:{
        iconName: 'rainy-sharp',
    }
}

export default function Weather({temp,condition}){
    return (
        <LinearGradient colors={['#746353','#963785','#895743']} style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.halfContainer}>
                    <Ionicons name={weatherOptions[condition].iconName} size={65} color="black" />
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
    }
})