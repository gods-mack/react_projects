import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


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


const YourApp = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
     <Text>Clicked {count} times. </Text>
     <Button
        onPress = {() => setCount(count+1)}
        title ="Click me"
        />
    </View>
  );
}

export default YourApp;