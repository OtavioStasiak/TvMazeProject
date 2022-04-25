import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SeasonItem } from "../../components/SeasonItem";
import { api } from "../../services/api";

import { styles } from "./styles";

type Props = {
    id: number;
};
type SeasonData = {
    id: number;
    number: number;
    episodeOrder: number;
};

export function EpisodeList({id}: Props){
    const [loading, setLoading] = useState(false);

    const [seasons, setSeasons] = useState<SeasonData []>([]);

    async function fetchSeasons(){
        setLoading(true);

        const response = await api.get(`shows/${id}/seasons`)
        .then((response) => setSeasons(response.data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    };

    useEffect(() => {fetchSeasons()}, []);

    return(
        <View style={styles.container}>
            <View>
                
            </View>
            <Text style={styles.title}>
                All Episodes
            </Text>

            {seasons.map((item, index) => 
            <SeasonItem 
             seasonId={item.id} 
             numberOfSeason={item.number} 
             episodeOrder={item.episodeOrder}
            />)}

        </View>
    )
}