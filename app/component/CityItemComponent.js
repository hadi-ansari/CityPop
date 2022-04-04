import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

/*
  Represents an item in the list of most populated cities. In this way
  we can syle and develope them independent of other components
*/
export default function CityItemComponent( props ) {

  cityClickHandler = (cityName, cityPopulation) => {
    props.navigation.navigate("cityResultScreen", { cityName: cityName.toUpperCase(), cityPopulation })
   
  }

  return ( 
    <TouchableOpacity style={styles.cityItemView} onPress = {() => cityClickHandler(props.cityName, props.cityPopulation)}>
      <View>
        <Text style={{ fontSize: 25 }}>
          {props.cityName}
        </Text>
      </View>
    </TouchableOpacity>
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
  cityItemView: {
    height: 50,
    width: '80%',
    marginBottom: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center'
  }
})