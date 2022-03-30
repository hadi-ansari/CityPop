import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity} from 'react-native';

export default function App() {

  const cityBtnClickHandler = () => {
    console.log("City button clicked!");
  }

  const countryBtnClickHandler = () => {
    console.log("Country button clicked!");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>CityPop</Text>

      <View style={styles.buttonContainer}>
          <Button
            onPress={cityBtnClickHandler}
            title="SEARCH BY CITY"
            color="#6119e6"/>
      </View>

      <View style={styles.buttonContainer}>
          <Button
            onPress={countryBtnClickHandler}
            title="SEARCH BY COUNTRY"
            color="#6119e6"/>
      </View> 

      <StatusBar style="auto" />
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
    width: "60%",
    margin: 10,
  },
});
