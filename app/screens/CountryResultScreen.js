import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import dataGetter from '../utils/dataGetter'

export default function CountryResultScreen({ navigation, route }) {
  cityClickHandler = (name) => {
    console.log(name, "clicked")
    const url = 'http://api.geonames.org/search?name_equals=' + name + '&type=json&username=weknowit'

    dataGetter.fetchCity(url).then(result => {
      console.log("Population: ", result)
      navigation.navigate("cityResultScreen", { cityName: name.toUpperCase(), cityPopulation: result })
    }).catch(() => {
      console.log("No result")
    })
  }

  let cityItems = []

  for (let i = 0; i < route.params.mostPopulatedCities.length; i++) {
    cityItems.push(
      <TouchableOpacity style={styles.cityView} key={i} onPress={() => cityClickHandler(route.params.mostPopulatedCities[i].toponymName)}>
        <View>
          <Text style={{ fontSize: 25 }}>
            {route.params.mostPopulatedCities[i].toponymName}
          </Text>
        </View>
      </TouchableOpacity>

    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{route.params.countryName}</Text>
      {cityItems}
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