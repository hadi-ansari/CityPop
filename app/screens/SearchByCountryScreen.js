import { StyleSheet, Text, SafeAreaView, TextInput, View, Button} from 'react-native'
import React from 'react'

export default function SearchByCountryScreen( {navigation} ) {
    searchQuery = ""
    const searchBtnhandler = async () => {
        console.log("searching by country...");
        searchQuery = searchQuery.trim().toLowerCase()

        if(searchQuery.length == 0){
            console.log("The search value can not be empty!")
            return
        }

        // GET request using fetch
        const apiUrl = 'http://api.geonames.org/search?q=' + searchQuery + '&cities=cities15000&orderby=population&type=json&username=weknowit'
        console.log(apiUrl)
        fetch(apiUrl, {
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(response => {
                if(response.ok){
                    console.log("It was OK!")
                    return response.json()
                }
            }) 
            .then(data => {
                /* Most relevant place seems to be the first element (place) in the list  
                    therefore we will check if the first element (place) is a country otherwise
                    we inform user that no place is found
                */
                if(data.totalResultsCount !== 0 ){
                    let mostPopulatedCities = []
                    let counter = 0
                    let index = 0
                    while( counter < 3 ){
                        if(!data.geonames[index]){
                            break
                        }
                        else if(data.geonames[index].countryName.toLowerCase().includes(searchQuery)){
                            console.log(data.geonames[index].countryName)
                            mostPopulatedCities.push(data.geonames[index])
                            counter++
                        }
                        index++
                    }
                    //console.log(mostPopulatedCities)
                    navigation.navigate("countryResultScreen", {countryName: searchQuery.toUpperCase(), "mostPopulatedCities": mostPopulatedCities});
                    return
                }
                console.log("No result!")
            });
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>SEARCH BY COUNTRY</Text>

            <TextInput
                style={styles.input}
                onChangeText={newText => {
                    console.log("Value is changing...")
                    searchQuery = newText;
                }}
            />

            <View style={styles.buttonContainer}>
                    <Button
                    onPress={searchBtnhandler}
                    title="SEARCH BY COUNTRY"
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