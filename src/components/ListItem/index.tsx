import React from "react";
import { TouchableOpacity, Image, Text, View, TouchableOpacityProps } from "react-native";

import  MaterialIcons  from "@expo/vector-icons/MaterialIcons";

import { Status } from "../Status";
import { FavoriteButton } from "../FavoriteButton";
import {Average} from '../Average';

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    image: {
        medium: string;
    } | null;
    title: string;
    genre:[string];
    status: string;
    average: number;
}

export function ListItem({image,title,genre,status, average, ...rest}: Props){

   const lastIndexOfGenreArray = genre.length - 1;

   const ifThereIsNoImage = image === null ? true : false;

    return(
        <TouchableOpacity activeOpacity={0.8} style={styles.container} {...rest}>

            {ifThereIsNoImage === true
                ?
                <MaterialIcons name="image" size={100} color="white" />                
                :
                <Image 
                source={{uri: image!.medium }} 
                resizeMode="contain" 
                style={styles.image}/>
            }

            <View style={styles.textContent}>
                <Text style={styles.title} numberOfLines={1}>
                {title}
                </Text>
                
                <Average rating={average} />

                <Status status={status}/>
                <Text style={styles.genre}>
                    {genre.map((item, index) => index  === lastIndexOfGenreArray ? item : item+' | ')}
                </Text>
            </View>
            <FavoriteButton />

        </TouchableOpacity>
    )
}
