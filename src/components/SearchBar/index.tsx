import React from "react";
import { View, TouchableOpacity, TextInput, TextInputProps } from "react-native";

import  { FontAwesome }  from '@expo/vector-icons';

import { styles } from "./styles";

type Props = TextInputProps & {
    onSearchPress: () => void;
}

export function SearchBar({onSearchPress, ...rest}: Props){
    return(
        <View style={styles.container}>
            <TextInput placeholder="Search your show..." placeholderTextColor={"#fff"} style={styles.input} {...rest}/>

            <TouchableOpacity onPress={onSearchPress}>
                <FontAwesome name="search" size={24} color="white" />            
            </TouchableOpacity>
        </View>
    )
}