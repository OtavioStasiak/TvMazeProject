import {View, Text, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import LogoImg from '../../assets/logo.png';
import { styles } from './styles';
import { LoginButton } from '../../components/LoginButton';
import React, { useState } from 'react';

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


export function Login(){
    const [FLoading, setFLoading] = useState(false);
    const [GLoading, setGLoading] = useState(false);

    async function handleLoginWithGoogle(){
        if(GLoading || FLoading === true){
            return;
        };
        /* setGLoading(true);

        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        return auth().signInWithCredential(googleCredential)
        .then((response) => console.log(response.user)) */
    };

    function handleLoginWithFacebook(){
        if(FLoading || GLoading === true){
            return;
        };
        setFLoading(true);
    };

    return(
        <View style={styles.container}>

            <StatusBar style='dark'/>

            <View style={styles.content}>
                <Image source={LogoImg} resizeMode="contain" style={styles.logo} />

                <Text style={styles.text}>
                    Encontre suas séries favoritas,{'\n'}
                    verifique sua programação e{'\n'}
                    muito mais!
                </Text>

                <LoginButton activeOpacity={0.8} isLoading={GLoading} whatIcon='Google' title='Logar Com Google' />
                <LoginButton activeOpacity={0.8} isLoading={FLoading} whatIcon='Facebook' title='Logar Com Facebook' />
            </View>

        </View>
    )
}