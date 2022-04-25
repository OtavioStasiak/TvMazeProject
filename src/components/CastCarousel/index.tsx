import React from 'react';
import { ScrollView, Image, Text, View } from 'react-native';

import { CharacterItem } from '../CharacterItem';

type Props = {
    cast: [{
        character: {id: string, name: string, image: {medium: string, original: string}};  
        person: {id: string, name: string, image: {medium: string, original: string}};
    }];
};

export function CastCarousel({cast}: Props){
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {cast.map((item, index) => <CharacterItem key={index} photo={item.character.image} namePerson={item.person.name} nameCharacter={item.character.name} />)}
        </ScrollView>
    )
}