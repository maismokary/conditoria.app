import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from './SearchBar'

const SearchScreen=()=> {
    // const [searchText,setSearcText]=useState()

  return (
    <View style={styles.container}>
         <SearchBar searchText={searchText} setSearcText={setSearcText}/>
         <Text >SearchScreen</Text>
    </View>
   
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"red",
        
    }

})
export default SearchScreen;

