import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MoviesList from './MoviesList';
export default function MovieListScreen({navigation}) {
  return (
    <View>
     <StatusBar barStyle="dark-content" /> 
      <SafeAreaView> 
        <ScrollView 
          contentInsetAdjustmentBehavior="automatic" 
          style={styles.scrollView}> 
           <MoviesList navigation={navigation}/>
        </ScrollView> 
      </SafeAreaView> 
    </View>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

