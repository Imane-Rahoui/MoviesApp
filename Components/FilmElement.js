import React from "react";
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

class FilmElement extends React.Component {
  render() {
    let IMAGEPATH = "http://image.tmdb.org/t/p/w500";
    let imageurl = IMAGEPATH + this.props.movie.poster_path;
    return (
      <View style={styles.movieItem}>
        <View style={styles.movieItemImage}>
          <Image
            source={{ uri: imageurl }}
            style={{ width: 99, height: 146 }}
          />
        </View>
        <View style={{ marginRight: 50 }}>
          <Text style={styles.movieItemTitle}>{this.props.movie.title}</Text>
          <Text style={styles.movieItemText}>
            {this.props.movie.release_date}
          </Text>
          <Text
            numberOfLines={6}
            ellipsizeMode="tail"
            style={styles.movieItemText}
          >
            {this.props.movie.overview}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  movieItem: {
    margin: 5,
    flex: 1,
    flexDirection: "row",
  },
  movieItemImage: {
    marginRight: 5,
  },
  movieItemTitle: {
    fontWeight: "bold",
  },
  movieItemText: {
    flexWrap: "wrap",
  },
});
export default FilmElement;
