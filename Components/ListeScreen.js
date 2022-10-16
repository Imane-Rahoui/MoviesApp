import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ListeFilms from "./ListeFilms";
export default function ListScreen({ navigation }) {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <ListeFilms navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.clear,
  },
});
