import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { styles } from './styles';

type Props = {
    seasonId: number;
    numberOfSeason: number;
    episodeOrder: number;
}

export function SeasonItem({numberOfSeason, episodeOrder, seasonId}: Props){
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.textBox}>
                <Text style={styles.title}>
                    Season {numberOfSeason}
                </Text>
                <Text style={styles.subtitle}>
                    {episodeOrder === null ? '??' : episodeOrder} Episodes
                </Text>
            </View>
            <Entypo name="circle-with-plus" size={15} color="#fff" />

        </TouchableOpacity>
    )
}