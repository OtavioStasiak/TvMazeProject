import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.42)',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    content: {
        backgroundColor: '#fff',
        borderColor: '#FB8500',
        borderWidth: 4,
        borderRadius: 3,
        width: '95%',
        height: '70%',
    },
    closeButton: {
        marginRight: '85%',
        marginBottom:5
    }

})