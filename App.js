import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,Image } from 'react-native';
import Introduce from './src/Screens/Introduct/Introduce'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PreLogin from './src/Screens/Login/preLogin';
import SignIn from './src/Screens/Login/SignIn';
import SignUp from './src/Screens/Login/SignUp';
import Home from './src/Screens/Home/Home';
import SingleFoodItem from './src/SingleFoodItem/SingleFoodItem';
import Cart from './src/Screens/Cart/Cart';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown:false,
        }}
      >
         <Stack.Screen name="Introduce" component={Introduce} />
        <Stack.Screen name='PreLogin' component={PreLogin}/>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='SignUp' component={SignUp}/> 
         <Stack.Screen name='HomeScreen' component={Home}/> 
         <Stack.Screen name='SingleFoodItem' component={SingleFoodItem}/>
        <Stack.Screen name='MyCart' component={Cart}/>
       </Stack.Navigator> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
