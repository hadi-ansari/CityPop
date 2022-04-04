import { StyleSheet, View ,Text } from 'react-native'
import React from 'react'

/*
  Represents a city which consists of city name as header and 
  population of the city 
*/
export default function CityComponent(props) {

    numberWithSpaces = (number) => {
        // 123000 as input turn to 123 000
        // with this regex
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <View style = {styles.container}>
            <Text style={styles.header}>{props.cityName}</Text>
            <View style={styles.populationView}>
                <Text style={{ marginBottom: 15 }}>POPULATION</Text>
                <Text style={{ fontSize: 25 }}>
                    {numberWithSpaces(props.cityPopulation)}
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
    populationView: {
        height: 100,
        width: '80%',
        borderWidth: 1,
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 5
    }
})