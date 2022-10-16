import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
export default class MovieDetailScreen extends React.Component {
    render() {
        let film=this.props.route.params.Film_send;
        let IMAGEPATH = 'http://image.tmdb.org/t/p/w500';
          let imageurl = IMAGEPATH + film.backdrop_path;
      return (
        <View>
              <Image source={{uri: imageurl}} style={styles.image}  />
              <Text style={styles.title}>{film.title}</Text>
              <Text style={styles.text}>{film.release_date}</Text>
             <Text style={styles.text}>{film.overview}</Text>
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    image: {
      aspectRatio: 670/250
    },
    title: {
      fontWeight: 'bold',
      fontSize: 15
    },
    text: {
      fontSize: 12,
      flexWrap: 'wrap'
    }});