import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListScreen from "./Components/ListeScreen";
import DetailFilm from "./Components/DetailFilm";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LIST MOVIES" component={ListScreen} />
        <Stack.Screen name="Details MOVIE" component={DetailFilm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// <NavigationContainer>
// <Stack.Navigator>
//   <Stack.Screen name="LIST MOVIES" component={MovieListScreen} />
//   <Stack.Screen name="Details MOVIE" component={MovieDetailScreen} />
// </Stack.Navigator>
// </NavigationContainer>

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});
