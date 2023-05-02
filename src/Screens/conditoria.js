
import React, { useContext, useEffect ,useState } from 'react'
import { View,StyleSheet, FlatList, Image, ImageBackground, Text, } from 'react-native'
import Card from '../component/Card';
import Header from '../component/Header';
import menuData from '../res/mockData/menuItems';
import MenuContext from '../store/MenuContext';
import SearchBar from './SearchBar';
const Conditoria = (props) => {
  const {menuItems ,setMenuItems,} = useContext(MenuContext) ;
  const [searchText , setSearchText] = useState('') ; 
  
  const renderCards = ({ item }) => {

    return <Card {...item} />
  };
  useEffect(()=> {
      setMenuItems(menuData); 
  },[])
  const onSearchChange = (val) => {
    console.log('val" ' , val);
      setSearchText(val) 
  }
  const setPageData = () => {
      if(!searchText || searchText == 'all'){
        return menuItems ; 
      }

      const filterdData = menuItems.find(product => product.title === searchText).products;
      return filterdData; 
    };
    useEffect(()=> {
      setMenuItems(menuData); 
  },[])
 

  return (
    <View style={styles.countainer}>
      <Header title="donut"/>
      <SearchBar onSearchChange={(val) => onSearchChange(val)}/>
      {/* <View style={styles.container2}>
      <View style={styles.container3}>
      </View>
      </View> */}
      <FlatList
        data={setPageData()}
        renderItem={renderCards}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
      
    </View>
  )
}
const radius = 30;
const styles = StyleSheet.create({
  countainer: {
    flex:1,
    backgroundColor: 'white',
  },
  // container2: {
  //   width:120,
  //   height:100,
  //   borderWidth: 0.75,
  //   borderColor: "pink",
  //   borderRadius:50,
  //   marginLeft:30,
  //   backgroundColor: '#F89DAE',
  //   paddingBottom: 10,
  //   flexDirection:"row",
  //   shadowColor: 'red',
  //   shadowOffset: {
  //     width: 50,
  //     height: 50
  //   },
  //   shadowOpacity: 0.75,
  //   shadowRadius: 15,
  //   elevation: 10,
  // },
  // container3: {
  //   width:120,
  //   height:100,
  //   borderWidth: 0.75,
  //   borderColor: "pink",
  //   borderRadius:50,
  //   marginLeft:200,
  //   backgroundColor: '#F89DAE',
  //   paddingBottom: 10,
  //   flexDirection:"row",
  //   shadowColor: 'red',
  //   shadowOffset: {
  //     width: 50,
  //     height: 50
  //   },
  //   shadowOpacity: 0.75,
  //   shadowRadius: 15,
  //   elevation: 10,
  // },
 
});


export default Conditoria;
