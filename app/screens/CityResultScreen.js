import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

export default function CityResultScreen({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{route.params.cityName}</Text>
      <View style={styles.populationView}>
        <Text style ={{fontSize: 25}}>
          {route.params.cityPopulation}
        </Text>
      </View>
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
  populationView: {
    height: 100,
    width: '80%',
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center'
  }
})