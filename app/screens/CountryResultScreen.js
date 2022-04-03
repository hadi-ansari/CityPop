import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import CountryComponent from '../component/CountryComponent'

export default function CountryResultScreen({ navigation, route }) {

  return (
    <SafeAreaView style={styles.container}>
      <CountryComponent countryName = { route.params.countryName } mostPopulatedCities = { route.params.mostPopulatedCities } navigation = { navigation }/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})