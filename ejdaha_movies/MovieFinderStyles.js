import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    headerText: {
        fontSize: 50,
        color: 'blue',
    },
    inputText:{
        width: "100%",
        borderRadius: 20,
        backgroundColor: 'white',
    },
    headerBtn: {
        width: '100%',
        borderRadius: 20,
        marginTop: 5,
        backgroundColor: 'red',
        alignItems: 'center'
    },
    headerBtnText:{
        fontSize: 30,
    },
    movieListsStyle:{
        justifyContent:'center',
        alignItems: 'center'
    },
    resultsScrollContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        borderRadius: 10,
        marginTop: 20,
        width: 200,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textstyle:{
        fontSize: 25,
        marginTop: 5,
        marginBottom: 20,
        color: 'red',
    }
});