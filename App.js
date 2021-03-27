import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image,StyleSheet, ScrollView, SafeAreaView,Button,TouchableOpacity } from 'react-native';
import PostList from './PostList.js';
import NavigationBar from 'react-native-navbar';
import Imcard from './components/Imcard'

const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
};
 
const titleConfig = {
  title: 'Helloworld',
};
 

var base_url = 'http://insta-apii.herokuapp.com'
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      p_caption: '',
      p_time:'',
      p_image:'',
      posts:[],
      isLoading: true
    };
  }

 

  componentDidMount() {
    fetch('https://insta-apii.herokuapp.com/posts/', {method:'GET'})
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ posts:json});
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
  
  render() {
    const { data, isLoading } = this.state;
    const pressHandler = (slug) => {
      console.log("Profile Hit")
    }
  
    return (
      <View>
         <NavigationBar
         title='Instagram'
         height={50}
         leftButtonTitle='back'
         rightButtonTitle='forward'
      />
      <ScrollView style={styles.scrollView} >
      {
        this.state.posts.map((p) => {
          return (
            <Imcard p={p}/>
          )
        })
      }
      </ScrollView>
      </View>
    );
  }
};  


var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding:10,
    height:'50%'

  },
  card: {
    borderWidth: 0,
    borderRadius: 3,
    borderColor: '#000',
    width: '98%',
    padding: 5
  },
  namestyle:{
    fontWeight:'bold',
    fontSize:15,
    padding:10
  },
  namestyle_:{
    fontWeight:'bold',
    fontSize:20,
    paddingLeft:10
  },
  scrollView:{
    backgroundColor: 'white',
    marginHorizontal: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderColor: 'pink',
    borderWidth: 2,
    borderRadius: 75
  },
 
  });
