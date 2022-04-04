import { StyleSheet, Text, SafeAreaView, TextInput, View, Image, TouchableOpacity} from 'react-native'
import React , {useState} from 'react'
import dataGetter from '../utils/dataGetter'
import * as Progress from 'react-native-progress'

export default function SearchByCountryScreen( {navigation} ) {
    const [searchQuery, setSearchQuery] = useState()
    const [errorMessage, setErrorMessage] = useState()
    const [progressBarShouldShow, setProgressBarShouldShow] = useState()

    /* Handles searching. We first validate search query and then send a fetch request to the API.*/
    const searchBtnhandler = () => {
        setProgressBarShouldShow(true)
        setErrorMessage(null)

        try{
            const countryName = searchQuery.trim().toLowerCase()

            if( countryName.length == 0){
                throw new Error
            }
        
            dataGetter.fetchMostPopulatedCities(countryName).then(mostPopulatedCities => {
                for(let i = 0; i < mostPopulatedCities.length; i++){
                    setProgressBarShouldShow(false)
                    navigation.navigate("countryResultScreen", {countryName: countryName.toUpperCase(), mostPopulatedCities})
                }
            }).catch(() => {
                setProgressBarShouldShow(false)
                setErrorMessage("No result.")
            })
        }
        catch(e) {
            setProgressBarShouldShow(false)
            setErrorMessage("Input can not be empty.")
        }
        
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.header}>SEARCH BY COUNTRY</Text>
            </View>

            <View style={{alignItems: "center"}}>
                <TextInput
                    value={searchQuery}
                    style={styles.input}
                    onChangeText={newText => {
                        setSearchQuery(newText) 
                        setErrorMessage(null)
                    }}
                />
                <View>
                    <TouchableOpacity onPress={()=> searchBtnhandler()}>
                        <View style={styles.SearchIconView}>
                            <Image source={require('../assets/search.png')} style={styles.searchIcon} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.errorView}>
                <Text style={styles.errorText}>{errorMessage}</Text>
            </View>
            {
                progressBarShouldShow? (
                    <View>
                        <Progress.Pie size={100} indeterminate={true} borderWidth={4} progress= {0}/>
                    </View>)
                    : null
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        width: 250,
        marginBottom: 20,
        borderWidth: 1,
        padding: 10,
    },
    errorText:{
        color: 'red'
    },
    searchIcon: {
      width: 30,
      height: 30
    },
    SearchIconView: {
      borderRadius: 30,
      backgroundColor: "#6119e6",
      padding: 10
    }
})