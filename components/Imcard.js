
import React, { useState } from 'react';
import { Text, View, StyleSheet, Button,TouchableOpacity,Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


var base_url = 'http://insta-apii.herokuapp.com'

const style = StyleSheet.create(
  {
    center:{
      alignItems:'center',
      tintColor:'red'
    }
  }
)

const Greeting = (props) => {
  return (
    <View style={style.center}>
      <Text>Hello, {props.name}!</Text>
    </View>
  )
}


const Imcard = ({p}) => {
    const pressHandler = (slug) => {
        console.log("Profile Hit")
      }

        return (
          <View style={styles.card}>
            <TouchableOpacity onPress={() => pressHandler(p.slug)}>
            <View style={{alignItems:'center', flexDirection:'row'}}>
              <Image
                style={styles.image}
                source={{height:500, width:'97%'}} source={{uri:base_url.concat(p.author.image)}}
                resizeMode={"cover"} // <- needs to be "cover" for borderRadius to take effect on Android
              />
              <View style={{ flexDirection:'column'}}>
             
                  <Text style={styles.namestyle_}>{p.author.username}</Text>
                  <Text style={{paddingLeft:10}}>{p.location}</Text>
         
              </View>
            </View>
            </TouchableOpacity>
            <Text style={{paddingLeft:5,paddingTop:10,paddingBottom:2}}>{p.caption}</Text>
            <Image style={{height:500, width:'97%'}} source={{uri:base_url.concat(p.photo)}} />
         
          </View>
        )
      

}
var styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding:10,
      height:'50%'
  
    },
    card: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#e6dddb',
      width: '98%',
      padding: 5,
      marginTop:10
      
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

    
export default Imcard;