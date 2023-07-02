import React from 'react'
import { View, Text, Button } from "react-native" 

export default function DetailsCard({wind,humidity,rain}) {

  return (
    <View className="items-center justify-center my-4 ">
     <View className="w-80 h-16 bg-[#F5F5F5] justify-around items-center  flex-row rounded-xl">

    <View>
      <Text className="text-base font-lg text-center">Wind</Text>
      <Text  className="text-base font-semibold text-center">{wind}KPH</Text>
    </View>
    <View>
      <Text className="text-base font-lg text-center">Humidity</Text>
      <Text className="text-base font-semibold text-center">{humidity}%</Text>
    </View>
    <View>
      <Text className="text-base font-lg text-center">Rain</Text>
      <Text className="text-base font-semibold text-center">{rain}%</Text>
    </View>
     </View>
  </View>
  )
}


