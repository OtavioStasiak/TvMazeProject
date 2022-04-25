import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, useWindowDimensions, ScrollView } from "react-native";

import { useRoute } from "@react-navigation/native";
import RenderHtml from 'react-native-render-html';

import { Header } from "../../components/Header";
import { styles, tagStyle } from "./styles";
import { api } from "../../services/api";
import { Average } from "../../components/Average";
import { Status } from "../../components/Status";
import { EpisodesButton } from "../../components/EpisodesButton";
import { CastCarousel } from "../../components/CastCarousel";
import { Divider } from "../../components/Divider";
import { ModalView } from "../../components/ModalView";
import { EpisodeList } from "../EpisodeList";

type Params = {
    id: number;
};

type ShowDetailsData = {
    name: string;
    genres: [string];
    status: string;
    premiered: string;
    ended: string;
    officialSite: string;
    rating:{
        average: number | null;
    };
    image:{
        original: string;
    };
    summary: string;
    _embedded:{
        cast: [{
            character: {id: string, name: string, image: {medium: string, original: string}};  
            person: {id: string, name: string, image: {medium: string, original: string}};
        }]
    };
};

export function ShowDetails(){
    const { width } = useWindowDimensions();
    const route = useRoute();
    const {id} = route.params as Params;
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const [showDetails, setShowDetails] = useState<ShowDetailsData>({} as ShowDetailsData);

    async function fetchShowDetails(){
        setLoading(true);

        const response = await api.get(`shows/${id}?embed=cast`)
        .then((response) => setShowDetails(response.data))
        .catch(error => {console.log(error); return;})
        .finally(() => setLoading(false));
    };

    useEffect(() => {fetchShowDetails()}, []);

    const source = {html: showDetails.summary};

    return(
        <View style={styles.container}>
            <Header />
            { loading === true
                ?
                <ActivityIndicator size={30} color={'#fff'} />
                :
                <ScrollView contentContainerStyle={styles.scroll}>

                    {showDetails.image !== undefined && <Image style={styles.image} source={{uri: showDetails.image.original}} resizeMode="contain" />}
                    
                    <Text style={styles.title}>
                        {showDetails.name}
                    </Text>

                     <View style={styles.details}>

                        <Text style={styles.contentText}>
                           {showDetails.genres !== undefined && showDetails.genres.length > 1 ? 'Genres' : 'Genre'}: {showDetails.genres !== undefined && showDetails.genres.map((item, index) => index  === showDetails.genres.length -1 ? item : item+' | ')}
                        </Text>

                        {showDetails.rating !== undefined && <Average rating={showDetails.rating.average!}/>}

                        <Status status={showDetails.status} />

                        <Text style={styles.contentText}>
                        Premiered: {showDetails.premiered}
                        </Text>

                        <Text style={styles.contentText}>
                        Ended: {showDetails.ended}
                        </Text>

                    </View>
                    <EpisodesButton onButtonPress={() => setVisible(true) }/>
                    {showDetails.summary !== undefined && <RenderHtml tagsStyles={tagStyle} contentWidth={width} source={source} />   }
                    
                    <Text style={styles.castTitle}>
                        Cast
                    </Text>
                    {showDetails._embedded !== undefined && <CastCarousel cast={showDetails._embedded.cast} />}
                </ScrollView>

            }

            <ModalView visible={visible} animationType='fade'>
                <EpisodeList id={id}/>
            </ModalView>
        </View>
    )
}