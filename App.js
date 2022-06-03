import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Alert } from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';
import Weather from './Weather';
import axios from 'axios';

const My_API_KEY = '2ecfba5bad65c8925d5cc5b759d1eee9';

export default class extends React.Component {

  state = {
    isLoading:true
  }

  getWeather = async (latitude,longitude) => {
    const {data: {main: {temp}, weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${My_API_KEY}&units=metric`);
    this.setState({isLoading: false, temp: temp, condition:weather[0].main,});
    console.log(data);
  }

  getLocation= async ()=>{
    try{
      await Location.requestBackgroundPermissionsAsync();
      const{coords:{latitude,longitude}}  = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude);
    }
    catch(error){
      Alert.alert('Не могу')
    }
    
  }

  componentDidMount(){
    this.getLocation();
  }

  render () {
    const {isLoading, temp, condition}=this.state;
    return (
      isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}