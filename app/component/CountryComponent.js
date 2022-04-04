import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import CityItemComponent from './CityItemComponent'

/*
  Represents a country which consists of country name as header and 
  a list of most populated cities in form of subcomponent 
*/
export default function CountryComponent( props ) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{ props.countryName }</Text>
            
            {/* 
                For each city we create a CityItemComponent 
            */}
            {
                props.mostPopulatedCities.map((city, key) => {
                    return <CityItemComponent key={key} cityName={city.cityName} cityPopulation={city.cityPopulation} navigation={props.navigation} />
                })
            }
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
    }
})