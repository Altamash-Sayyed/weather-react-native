import { StatusBar } from 'expo-status-bar'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Forecast from './screens/Forecast';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown:false}} name="Forecast" component={Forecast} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


