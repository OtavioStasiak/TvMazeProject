import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000'
    },
    scroll: {
        paddingTop: 10,
        paddingBottom: 20,
        alignItems: 'center'
    },
    image: {
        width: 350,
        height: 380,
        elevation: 10
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 35,
        marginTop: 13
    },
    details: {
        width: '100%',
        paddingVertical: 15,
        paddingLeft: '5%'
    },
    contentText: {
        color: '#fff'
    },
    castTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 35,
        marginBottom: 10
    }
});

export const tagStyle = {
    p: { 
        color: '#fff', 
        paddingHorizontal: '5%', 
        marginTop: 20
    }};
