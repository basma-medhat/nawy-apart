import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Apartments from "../mobileApp/src/components/Apartments/Apartments";
import ApartmentDetails from "../mobileApp/src/components/ApartmentDetails/ApartmentDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Apartments">
        <Stack.Screen name="Apartments" component={Apartments} />
        <Stack.Screen name="Apartment" component={ApartmentDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
