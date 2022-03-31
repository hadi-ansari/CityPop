import { StyleSheet, Text, SafeAreaView, TextInput, View, Button} from 'react-native'
import React from 'react'

export default function SearchByCityScreen( {navigation} ) {

    const searchBtnhandler = () => {
        console.log("searching by city...");
        navigation.navigate("cityResultScreen");
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>SEARCH BY CITY</Text>

            <TextInput
                style={styles.input}
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