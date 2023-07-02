import React from 'react'
import { View, Text, Button, Image } from "react-native"

export default function WeatherCard({date,temp,weather,high,low,icon}) {

    return (
        <View className="items-center justify-center mt-16">
            <View className="w-80 h-72  rounded-3xl flex-row p-2 bg-[#323E68]">

                <View className="flex-col items-center justify-start mx-3 my-3">
                    <Text className="text-white my-3 text-lg">{date}</Text> 
                    <Text className="text-white my-6 text-3xl">{temp}°c</Text>
                    <Text className="text-white my-6 text-lg">high: {high}°c</Text>
                    <Text className="text-white my-3 text-lg">low: {low}°c</Text>
                </View>

                <View className="flex-col mx-9 my-4 items-center justify-start">
                    <Image
                    className="h-36 w-36 mb-3"
                        source={{
                            uri:`https:${icon}`
                          }}
                    />
                    <Text className="w-28 text-white text-center">
                       {weather}
                    </Text>
                </View>

            </View>
        </View>
    )
}


