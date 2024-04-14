import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#ECEFF1',
        padding: 10,
        margin: 5,
        marginTop: 0,
        borderRadius: 10,
        width: Dimensions.get('window').width / 2 - 10,
        justifyContent: 'space-between'
    },
    image: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    price: {
    },
    inStock: {
        marginTop: 5,
        color: 'red',
    },
});