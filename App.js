import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './app/screens/StartScreen';
import SearchByCityScreen from './app/screens/SearchByCityScreen';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
