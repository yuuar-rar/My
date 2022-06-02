import react from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View,Alert } from 'react-native';


export default function Weather({temp,condition}){
    return (
        <View style={styles.container}>
            <Text>{temp}</Text>
        </View>
    );
}
    
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.one0f(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust", "Smoke", "Haze", "Mist", "Clear", "Clouds"]).isRequired
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})