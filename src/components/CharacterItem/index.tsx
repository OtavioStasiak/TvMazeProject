import React from "react"
import {View, Text, Image} from 'react-native';
import { styles } from "./styles";

type Props = {
    photo: {original: string, medium: string} | null;
    namePerson: string;
    nameCharacter: string;
}

export function CharacterItem({photo, namePerson, nameCharacter}: Props){
    return(
        <View style={styles.container}>

            <Image source={{uri: photo?.original}} resizeMode="cover" style={styles.image} />

            <Text style={styles.person}>
             {namePerson}
            </Text>

            <Text style={styles.character} numberOfLines={1}>
             ({nameCharacter})
            </Text>
        </View>
    )
}