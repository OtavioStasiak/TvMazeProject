import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from "@react-navigation/native";

import LogoImg from '../../assets/logo.png';

import { styles } from "./styles";

export function Header(){
    const navigation = useNavigation();

    function handleOpenModal(){
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return(
        <View style={styles.container}>

            <TouchableOpacity onPress={handleOpenModal} style={styles.button}>
                <MaterialIcons name="menu" size={34} color="white" />
            </TouchableOpacity>
            <Image source={LogoImg} resizeMode="contain" style={styles.image}/>

        </View>
    )
}