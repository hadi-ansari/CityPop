import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import CityComponent from '../component/CityComponent'

export default function CityResultScreen({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <CityComponent cityName = {route.params.cityName} cityPopulation = { route.params.cityPopulation }/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})