import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container : {
        width: 160,
        height: 280,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#161a1d',
        marginRight: 5,
        paddingVertical: 8
    },
    person:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    character:{
        color: '#fff',
        textAlign: 'center'
    },
    image: {
        width: 150,
        height: 220,
        maxHeight: 220,
        borderRadius: 3,
        marginBottom: 8
    }
})