import { StyleSheet, Text, SafeAreaView, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react'
import dataGetter from '../utils/dataGetter'

export default function SearchByCityScreen({ navigation }) {

    const [searchQuery, setSearchQuery] = useState()
    const [errorMessage, setErrorMessage] = useState()

    const searchBtnhandler = () => {

        try {
            const cityName = searchQuery.trim().toLowerCase()

            if (cityName.length == 0) {
                throw new Error
            }

            dataGetter.fetchCityPopulation(cityName).then(cityPopulation => {
                setErrorMessage(null)
                navigation.navigate("cityResultScreen", { cityName: cityName.toUpperCase(), cityPopulation })
            }).catch(() => {
                setErrorMessage("No result")
            })

        }
        catch (e) {
            setErrorMessage("No result")
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.header}>SEARCH BY CITY</Text>
            </View>

            <View style={styles.InputView}>
                <TextInput
                    style={styles.input}
                    value={searchQuery}
                    onChangeText={newText => {
                        setSearchQuery(newText)
                        setErrorMessage(null)
                    }}
                />

                <Button
                    onPress={searchBtnhandler}
                    title="SEARCH BY CITY"
                    color="#6119e6" />
            </View>
            
            <View style={styles.errorView}>
                <Text style={styles.errorText}> {errorMessage} </Text>
            </View>

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
