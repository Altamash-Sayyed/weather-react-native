import React from 'react'
import { View, Text, Image } from "react-native" 

export default function Header({ date, weather, condition, high,icon, low }) {

    return (

        <View className="w-52  mx-3 my-3 p-2 bg-[#323E68] rounded-lg">

            <Text className="text-white text-center my-2">{date}</Text>
            <Image className="h-24 w-24 self-center" source={{uri:`https:${icon}`}} />
            <Text className="text-white text-center my-2">condition: {weather}</Text>
            {/* <Text className="text-white text-center my-2">{condition}</Text> */}
            <Text className="text-white text-center my-2">high: {high}°C</Text>
            <Text className="text-white text-center my-2">low: {low}°C</Text>


        </View>
    )
}


