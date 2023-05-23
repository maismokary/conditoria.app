import { useNavigation } from "@react-navigation/native";
import React from "react";
import {  StyleSheet,TextInput, TouchableOpacity, View } from "react-native";
import LoginScreen from "react-native-login-screen";
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

      <LoginScreen
     logoImageSource={require('../assets/icons8-doughnut-96.png')}
     onLoginPress={() => {}}
     onSignupPress={() => {}}
     onEmailChange={(value:String) => {
     username = value;
     console.log('username: ', username);
  }}
  loginButtonText={'Create an account'}
  disableSignup
  textInputChildren={
    <View style={{marginTop:16,}}>
      <TextInput
        placeholder="Re-Password"
        secureTextEntry
        onChangeText={(value:String) => {}}
      />
    </View>
  }
  onPasswordChange={(password: string) => {}}
/>
<TouchableOpacity style={[styles.container]} onPress={onHomePress} activeOpacity={0.6}>
    </TouchableOpacity>
    </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
 

});

export default HomeScreen;