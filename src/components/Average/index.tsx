import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
    rating: number | null;
}

export function Average({rating}: Props){
    const color = rating! >= 8 ? {color: '#00f56e'} : rating! >= 6 ? {color: '#ffd000'} : {color: '#ff0400'};
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Average:
            </Text>
            <Text style={[styles.value, color]}>
                {rating !== undefined && rating}
            </Text>
        </View>
    )
}