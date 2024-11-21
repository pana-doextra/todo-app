import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToDoItem from "./components/TodoItem";

const Stack = createNativeStackNavigator();


function App () {
  return (
    //<HomeScreen/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTitle: 'Main',
          headerTitleStyle: {
            color:'red',
            fontSize: 5
          }
        }} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App