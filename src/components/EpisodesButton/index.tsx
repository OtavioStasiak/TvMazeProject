import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

type Props = {
    onButtonPress: () => void;
}
export function EpisodesButton({onButtonPress}: Props){
    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={onButtonPress}>
            <Text style={styles.title}>
                List of Episodes
            </Text>
        </TouchableOpacity>
    )
}