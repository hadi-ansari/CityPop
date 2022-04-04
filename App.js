import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './app/screens/StartScreen';
import SearchByCityScreen from './app/screens/SearchByCityScreen';
import SearchByCountryScreen from './app/screens/SearchByCountryScreen';
import CityResultScreen from './app/screens/CityResultScreen';
import CountryResultScreen from './app/screens/CountryResultScreen';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* 
          Here we create all possible screens in the app that we need
          so we can navigate to later on
        */}

        <Stack.Screen
          name="start"
          component={StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="searchByCity"
          component={SearchByCityScreen}

          options={{title: "CityPop"}}
        />

        <Stack.Screen
          name="searchByCountry"
          component={SearchByCountryScreen}

          options={{title: "CityPop"}}
        />

        <Stack.Screen
          name="cityResultScreen"
          component={CityResultScreen}

          options={{title: "CityPop"}}
        />

        <Stack.Screen
          name="countryResultScreen"
          component={CountryResultScreen}

          options={{ title: "CityPop" }}
        />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
