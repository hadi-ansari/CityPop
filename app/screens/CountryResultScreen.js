import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import dataGetter from '../utils/dataGetter'
import CityItemComponent from '../component/CityItemComponent'

export default function CountryResultScreen({ navigation, route }) {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{route.params.countryName}</Text>
      {
        route.params.mostPopulatedCities.map((city, key) => {
          return <CityItemComponent key = {key} cityName={city.cityName} cityPopulation = {city.cityPopulation} navigation = {navigation}/>
        })
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 100,
    fontSize: 30,
    fontWeight: 'bold'
  },
  cityView: {
    height: 50,
    width: '80%',
    marginBottom: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center'
  }
})