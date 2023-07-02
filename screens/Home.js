import React from 'react'
import { View, Text } from "react-native"
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import Card from '../components/WeatherCard.js';
import DetailsCard from '../components/DetailsCard';
import react,{useState,useEffect} from 'react';
import { getWeatherForecast } from '../api/api';
import { TouchableOpacity } from 'react-native';

export default function Home() {
const [location,setLocation]=useState("")
const navigation = useNavigation();
const [forecast, setForecast] = useState([]);
 
const [inputValue, setInputValue] = useState("");
 

useEffect(() => {
    fetchWeatherForecast()
}, []);


const fetchWeatherForecast = async () => {
  if(inputValue==""){
    const data = await getWeatherForecast("delhi","1");
    setForecast(data);
    setLocation(inputValue)
  }else{
    const data = await getWeatherForecast(inputValue,"1");
    setForecast(data);
    setLocation(inputValue)
  }
  };

  const handleChange = (text) => {
    setInputValue(text) 
  }; 

  const goForeCast =  () => {
    navigation.navigate("Forecast",{locationCity:inputValue});
    
  }
  return (
    <SafeAreaView className="flex-1 bg-[#3FC3E0]">


      <View>
        <Header iconName={"location-pin"} location={location?location:"delhi"} date={"monday, 1 july 10:00"} />
      </View>

      <View>

        <Input onInputChange={handleChange} onPress={fetchWeatherForecast}/>
      </View>


      <View>
{
  forecast?
  forecast.map((elem,ind)=>{
     
     return(
      <View key={ind}>
        <Card date={elem.date} icon={elem.day.condition.icon} temp={elem.day.avgtemp_c} high={elem.day.maxtemp_c} low={elem.day.mintemp_c} weather={elem.day.condition.text}  />

        <DetailsCard wind={elem.day.maxwind_kph} humidity={elem.day.avghumidity} rain={elem.day.daily_chance_of_rain}/>
      </View>
    )
  }):
  <View className=" my-4 justify-center items-center">
    <Text className="font-semibold text-2xl">Not Found!</Text>
  </View>
}
      </View>

   

    {forecast?
      <View >
        <TouchableOpacity 
        className="w-48 h-12 items-center justify-center self-center my-5 rounded-full bg-[#FFFFFF]"
        onPress={goForeCast} 
          >
          <Text className="font-semibold text-[#3FC3E0]">5 Days Forecast report</Text>
         </TouchableOpacity>
      </View>:<></>}
    </SafeAreaView>
  )
}

