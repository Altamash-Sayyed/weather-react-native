import React,{useEffect, useState} from 'react'
import { View, Text, Button } from "react-native"
import Icon from "react-native-vector-icons/Entypo"

export default function Header({iconName,location,date}) {
  var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
  

  return (
    <View>
    <View className="flex flex-row justify-center items-center">
    <Icon
      name={iconName}
      size={28}
      color="black"
    />
    <Text className="text-2xl font-medium">{location}</Text>

  </View>
  <View className="items-center ">
    <Text className="text-base">{date.toLocaleDateString()+","+date.toLocaleTimeString()}</Text>
  </View>
  </View>
  )
}


