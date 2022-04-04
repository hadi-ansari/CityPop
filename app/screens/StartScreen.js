import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import React from 'react'

export default function StartScreen( {navigation} ) {

  const cityBtnClickHandler = () => {
    navigation.navigate('searchByCity');
  }

  const countryBtnClickHandler = () => {
    navigation.navigate('searchByCountry');
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.header}>CityPop</Text>

      <View style={styles.buttonContainer}>
        <Button
          onPress={cityBtnClickHandler}
          title="SEARCH BY CITY"
          color="#6119e6" />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={countryBtnClickHandler}
          title="SEARCH BY COUNTRY"
          color="#6119e6" />
      </View>

    </SafeAreaView>
  );
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
    buttonContainer:{
      width: '60%',
      margin: 10,
    }
  });