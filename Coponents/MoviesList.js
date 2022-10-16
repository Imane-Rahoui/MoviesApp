import React from 'react';
import {Text,View,ScrollView,StyleSheet,TextInput,Button} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import MovieListItem from './MovieListItem';

class MoviesList extends React.Component {
         constructor(props) {
        super(props);
        this.state = { movies: null ,title:null};
       }
      async componentDidMount(){
        this.getMovies();
      }
      async getMovies() {
        let APIKEY = 'bb53f692c5ab33282f0ed88fb8c1f630';
        let BASEURL = 'https://api.themoviedb.org/3/movie/now_playing';
        let url = BASEURL+'?api_key='+APIKEY;
        let response = await fetch(url);
        let data = await response.json();
        this.setState( {movies: data.results} );
        //console.log(data.results);
      }
      async find(title)
      {
         const URL = 'https://api.themoviedb.org/3/';
         const API_KEY = 'bb53f692c5ab33282f0ed88fb8c1f630';

        if (!title) {
            const response = await fetch(`${URL}movie/popular?api_key=${API_KEY}`)
            const data = await response.json();
            return(data)  
        } 
        else 
        {
            const response = await fetch(`${URL}search/movie?api_key=${API_KEY}&language=en-US&query=${title}`)
            const data = await response.json();
            return(data)  
        }
      }
      
      itemPressed = (film) => {
        this.props.navigation.navigate('Details MOVIE',{Film_send:film})
      }
      async searchFilms(title) {
          const data= await this.find(title)
        this.setState( {movies: data.results});
      }
    render() {
        if (this.state.movies == null){
            return(
              <View style={{flex: 1, padding: 20}}>
                <Text>Loading, please wait...</Text>
              </View>
            )
          }
          var items =this.state.movies.map((film) => (
            <TouchableHighlight onPress={()=>{this.itemPressed(film)}} 
                     underlayColor="lightgray" key={film.id}> 
              <MovieListItem movie= {film} key={film.id}/> 
            </TouchableHighlight>
          ))
          return (
            <ScrollView>
                <TextInput style={{height: 40,backgroundColor: 'azure', fontSize: 20}}  
   placeholder="Film to search !"  onChangeText={(text) => this.setState( {title: text} )} />  
                <Button title="Search" onPress={() => this.searchFilms(this.state.title)} />
              {items} 
            </ScrollView>
          );
    }
  }
  

  export default MoviesList;