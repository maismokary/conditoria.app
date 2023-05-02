import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { screenName } from "../route/ScreenNames";


const image = require('../assets/tota.png')

const HomeScreen = (props) => {
  const { title ,} = props
  const navigation = useNavigation();
  const onHomePress = () => {
    navigation.navigate(screenName.Page1, { data: props })
  };
 
  return(
   
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <TouchableOpacity style={[styles.container]} onPress={onHomePress} activeOpacity={0.6}>
    <View style={styles.CardContainer}>
      <Text style={styles.text}>START</Text>
    </View>
    </TouchableOpacity>
    </ImageBackground>
   
   
    </View>
    
  )

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  CardContainer: {
    width:300,
    // borderWidth: 0.75,
    backgroundColor: 'aqua',
    flexDirection:"row",
    height:80,
    marginLeft:40,
    borderRadius:40,
    marginTop:690,
    shadowColor: 'black',
    shadowOffset: {
      width: 50,
      height: 50
    },
    shadowOpacity: 0.75,
    shadowRadius: 15,
    elevation: 10,
    // paddingLeft:120
  },
  image: {
    flex: 1,
    justifyContent: "center",
 
  },
  text:{
    color:"black",
    fontSize: 20,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft:120,
  },
});

export default HomeScreen;