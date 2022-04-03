import { StyleSheet, Text, SafeAreaView, TextInput, View, Button} from 'react-native'
import React , {useState} from 'react'
import dataGetter from '../utils/dataGetter'
import * as Progress from 'react-native-progress'

export default function SearchByCountryScreen( {navigation} ) {
    const [searchQuery, setSearchQuery] = useState()
    const [errorMessage, setErrorMessage] = useState()
    const [progressBarShouldShow, setProgressBarShouldShow] = useState()

    const searchBtnhandler = async () => {
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
                setErrorMessage("No result")
            })
        }
        catch(e) {
            setProgressBarShouldShow(false)
            setErrorMessage("No result")
        }
        
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.header}>SEARCH BY COUNTRY</Text>
            </View>

            <View style={styles.InputView}>
                <TextInput
                    value={searchQuery}
                    style={styles.input}
                    onChangeText={newText => {
                        setSearchQuery(newText) 
                        setErrorMessage(null)
                    }}
                />
                <Button
                        onPress={searchBtnhandler}
                        title="SEARCH BY COUNTRY"
                        color="#6119e6"/>
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
    headerView: {
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    InputView: {
    },
    input: {
        height: 40,
        width: 250,
        marginBottom: 20,
        borderWidth: 1,
        padding: 10,
    },
    buttonView: {
        marginBottom: 100,
    },
    errorView: {
    },
    errorText:{
        color: 'red'
    }
})