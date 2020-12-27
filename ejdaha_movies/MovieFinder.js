import React, {Component} from 'react';
import {styles} from './MovieFinderStyles';
import {ScrollView, View, Text, TouchableOpacity, TextInput, Image} from 'react-native';

class MovieFinder extends Component {
  constructor(props){
    super(props)
    this.state ={
      startName: 'shameless',
      changedName: '',
      data: [],
    }
  }
  
  componentDidMount = async() =>{
    try{
      const response = await fetch(`http://api.tvmaze.com/search/shows?q=${this.state.startName}`)
      const data = await response.json()
      this.setState({data: data})
      console.log({data})
    }
    catch (e){
      console.log('Didmount error: ' + e)
    }
  }

  ChangeName = async () => {
    try{
      const response = await fetch(`http://api.tvmaze.com/search/shows?q=${this.state.changedName}`)
      const data = await response.json()
      this.setState({data: data})
      console.log({data})
    }
    catch (e){
      console.log('change name error: ' + e)
    }
  }

  MovieLists = () => this.state.data.map((all, index) =>{
    return(
      <View  key={index} style={styles.movieListsStyle}>
      <Image style={styles.imageStyle} source={{uri: all?.show?.image?.medium ?? 'https://cs9.pikabu.ru/post_img/big/2016/09/14/9/1473865516186911796.jpg'}}></Image>
      <Text style={styles.textstyle}>{all.show.name}</Text>
      </View>
    )
  })

  render(){
    return(
      <View style={styles.container}>
          <ScrollView contentContainerStyle ={styles.resultsScrollContainer} style = {styles.resultsScroll}>
          <Text style = {styles.headerText}>
              Best Movies!
            </Text>
            <TextInput style = {styles.inputText} 
            onChangeText={text => this.setState((prevState) => ({changedName : prevState.changedName = text}))}
            placeholder='Input name of movie'/>
            <TouchableOpacity style={styles.headerBtn} onPress={this.ChangeName}>
              <Text style={styles.headerBtnText}>GO</Text>
            </TouchableOpacity>
            <this.MovieLists jsonFile = {this.dataJson}/>         
          </ScrollView>
      </View>
    )
  }
}
export default MovieFinder;