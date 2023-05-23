
import React, { useContext, useState } from 'react';
import {
   StyleSheet, Text, View, } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import MenuContext from '../store/MenuContext';
const SearchBar = (props) => {
  const {menuItems} = useContext(MenuContext) ; 
  const menuData = menuItems.map((item , index) => {
    return {key: index , value : item.title , text : item.title}
  })
  menuData.unshift({key:999 , value:"all" , text:""})
  const renderData = () => {
    // const filterdData = menuItems.filter(item=> );
    const viewArr = filterdData.map(filteredMenuData =>
      <Text>
        {filteredMenuData.title}
      </Text>
    )
    return viewArr;
  }
  return (
    <View style={styles.container}>
      <View>
        {/* {renderData()} */}
        <SelectList
          setSelected={(val) => props.onSearchChange(val)}
          data={menuData || []}
          save="value"
        />
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    marginTop:20,
    height:130,
    width:400,
  

  },
 
})
export default SearchBar;