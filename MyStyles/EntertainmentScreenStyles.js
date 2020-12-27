import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    allArea: {
        flex: 5,
    },
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center'
    },
    name:{
        width: '80%',
        fontSize: 35,
    },
    button: {
        width: '18%',
        alignItems: 'center',
        backgroundColor: '#53805a',
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 25,
    }
})