import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { api } from '../../services/api';

import { styles } from './styles';
import { ListItem } from '../../components/ListItem';
import { SearchBar } from '../../components/SearchBar';
import { Divider } from '../../components/Divider';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

type ShowItem = {
    id: number;
    url: string;
    name: string;
    type: string;
    genres: [string];
    image: {
        medium: string;
    } | null;
    status: string;
    rating: {
        average: number;
    };
};

type SearchedShowItem = {
    show: ShowItem;
};


export function Home(){

    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);

    const [shows, setShows] = useState<ShowItem []>([]);
    const [searchedShow, setSearchedShow] = useState<SearchedShowItem []>([]);
    const [isSearch, setIsSearch] = useState(false);

    async function fetchShows() {

        setLoading(true);
        try{
            const response = await api.get(`shows?page=${page}`);

            setShows(prevState => prevState.concat(...response.data));

            setPage(page + 1);
        }catch(error){

            console.log(error);

        }finally{

            setLoading(false);

        };
    };

    useEffect(() => {fetchShows();}, []);

    const [search, setSearch] = useState('');

    async function fetchSearchedShows() {

        setLoading(true);
        setIsSearch(true);

        try{
            const response = await api.get(`search/shows?q=${search.toLowerCase()}`);
            
            setSearchedShow(response.data);

            
        }catch(error){

            console.log(error);

        }finally{

            setLoading(false);

        };
    };

    const finalSearchedShow = searchedShow.map((item) => item.show);

    useEffect(() => {
        if(search === ''){ 
            setSearchedShow([]);
            setIsSearch(false);
        }}, [search]);


    const navigation = useNavigation();

    function handleGoToShowDetails(id: number){
        navigation.navigate('ShowDetails', {id});
    };

    
    return(
        <View style={styles.container}>
            <Header />
            <StatusBar style='light'/>
            <SearchBar onChangeText={(text) => setSearch(text)} onSubmitEditing={() => fetchSearchedShows()} onSearchPress={fetchSearchedShows} />
            
            <FlatList
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.2}
            onEndReached={fetchShows}
            style={{width: '100%'}}
            data={isSearch === false ? shows : finalSearchedShow}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => 
            <ListItem 
            onPress={() => handleGoToShowDetails(item.id)}
            average={item.rating.average} 
            image={item.image} 
            title={item.name} 
            status={item.status} 
            genre={item.genres} />}
            ItemSeparatorComponent={() => <Divider />}
            ListFooterComponent={loading === true && <ActivityIndicator size={35} color={'#FFF'} />}
            />  
        </View>
    )
}