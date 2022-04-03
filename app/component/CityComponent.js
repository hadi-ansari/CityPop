import { StyleSheet, View ,Text } from 'react-native'
import React from 'react'

export default function CityComponent(props) {
    return (
        <View style = {styles.container}>
            <Text style={styles.header}>{props.cityName}</Text>
            <View style={styles.populationView}>
                <Text style={{ fontSize: 25 }}>
                    {props.cityPopulation}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'        
    },
    header: {
        marginBottom: 100,
        fontSize: 30,
        fontWeight: 'bold'
    },
    headerView: {
        borderWidth: 1,
        borderStyle: 'solid',
    },
    populationView: {
        height: 100,
        width: '80%',
        borderWidth: 1,
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center'
    }
})