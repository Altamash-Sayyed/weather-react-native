import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity,ScrollView, ActivityIndicator } from "react-native"
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Entypo"
 import ForecastCard from "../components/ForecastCard"
import { getWeatherForecast } from '../api/api';

 export default function Forecast() {
    const navigation = useNavigation();
    const [forecast, setForecast] = useState([]);
    const route = useRoute();
    const { locationCity } = route.params;

    useEffect(() => { 
        fetchWeatherForecast()
    }, []);

   
    const fetchWeatherForecast = async () => {
      
        const data = await getWeatherForecast(locationCity?locationCity:"delhi","5");
        setForecast(data);
      };




    const goBack = () => {
        navigation.goBack();
    }
    return (
        <View className="flex-1 bg-[#3FC3E0]">
            <TouchableOpacity className="flex-row my-4 mx-2 items-center justify-start" onPress={goBack}>
                <Icon
                    name="chevron-left"
                    size={30}
                />
                <Text className="font-semibold text-lg">Back</Text>
            </TouchableOpacity>

            <View>
            </View>
            <ScrollView>
                {forecast ? (
                    forecast.map((elem,ind) => (
                        <View className="items-center" key={ind}>
                            <ForecastCard icon={elem.day.condition.icon} date={elem.date} weather={elem.day.condition.text} high={elem.day.maxtemp_c} low={elem.day.mintemp_c} />
                        </View>
                    ))
                    
                ) : (
                    <View className="flex-1 items-center  justify-center"><ActivityIndicator size={30} color={"#323E68"} /></View>
                )}
            </ScrollView>
        </View>
    )
}
