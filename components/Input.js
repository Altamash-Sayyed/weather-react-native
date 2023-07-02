import React,{useState} from 'react'
import { TouchableOpacity } from 'react-native'
import { View,  TextInput } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Forecast({ onInputChange,onPress }) {

    const [inputValue, setInputValue] =useState("");

    const handleChange = (text) => {
        setInputValue(text);
        onInputChange(text);
    };
    return (
        <View>

            <View className="mx-3 mt-12">

                <View className="flex  flex-row rounded-full justify-between items-center bg-[#e6e6e6]">
                    <TextInput

                        value={inputValue}
                        onChangeText={handleChange}
                        placeholder='search'
                        className="p-4 font-medium text-gray-500"
                    />
                    <TouchableOpacity onPress={onPress} className="bg-[#FEB054] mx-3 p-2 rounded-full">
                        <Icon
                            name="search"
                            size={30}
                        />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

