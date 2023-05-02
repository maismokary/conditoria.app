
import { useEffect } from 'react';
import { useState } from 'react';
import {  Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import MenuContext from './MenuContext';

const MenuProvider=(props)=> {
    const [total,setTotal]=useState({});
    const[menuItems , setMenuItems] = useState([]) ; 
   
    const[counter,setCounter]=useState(0);
    const sum =counter * props.value;
   
    useEffect(() => {
     
    },[]);
  return (
    <MenuContext.Provider
    
    value={{
        total,
        setTotal , 
        menuItems , 
        setMenuItems
    }}>
      
        {props.children}
    </MenuContext.Provider>
    

  )
}
const styles = StyleSheet.create({
    nestedview:{
      alignItems:'center',
      justifyContent:'center'
    },
    calc:{
      flexDirection:'row',
      alignItems:"center",
      justifyContent:'center'
    },
    card:{
      flexDirection:'row',
      backgroundColor:"pink",
      borderRadius:15,
      padding:10,
      borderWidth:1,
      borderColor:"red",
      margin:30
    },
    text:{
      fontSize:15,
      fontWeight:"bold",
      textAlign:'center',
       color:"black",
       marginRight:10,
    },
    Button:{
      width:150,
      height:25,
      alignItems:'center',
      margin:20,
      borderRadius:10,
      justifyContent:'center'
    },
    input:{
      textAlign:'center',
      height:40,
      width:100,
      borderWidth:2,
      borderRadius:10,
      fontSize:20,
      fontWeight:'bold',
      marginTop:20,
      marginRight:10,
      color:"red"
    }

})
export default MenuProvider;
