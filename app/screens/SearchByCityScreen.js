import { StyleSheet, Text, SafeAreaView, TextInput, View, Button } from 'react-native'
import React , {useState} from 'react'
import dataGetter from '../utils/dataGetter'

export default function SearchByCityScreen( {navigation} ) {

    const [searchQuery, setSearchQuery] = useState()
    const searchBtnhandler = () => {
        console.log("searching by city...")

        const cityName = searchQuery.trim().toLowerCase()

        if(cityName.length == 0){
            console.log("The search value can not be empty!")
            return
        }

        dataGetter.fetchCityPopulation(cityName).then(cityPopulation => {
            navigation.navigate("cityResultScreen", {cityName: cityName.toUpperCase(), cityPopulation})
        }).catch(()=>{
            console.log("No result")
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>SEARCH BY CITY</Text>

            <TextInput
                style={styles.input}
                value = { searchQuery }
                onChangeText={newText => {
                    setSearchQuery(newText);
                }}
            />

            <View style={styles.buttonContainer}>
                    <Button
                    onPress={searchBtnhandler}
                    title="SEARCH BY CITY"
                    color="#6119e6"/>
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
    input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})
