
import React, {  useContext, useEffect, useState } from 'react'
import {  Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Card from '../component/Card';
import Header from '../component/Header';
import menuData from '../res/mockData/menuItems';
import MenuContext from '../store/MenuContext';
const Cake = (props) => {
  const { products,title} = props.route.params?.data || {}
  const {menuItems ,setMenuItems,} = useContext(MenuContext) ;
  const [ total, setTotal ] = useState(0)
  const [cartData,setCartData]=useState([])
  const [list, setList] =useState("");
  const  handleRemove=(title)=> {
    const setList = list.filter((item) => item.cartData !==cartData);
    return (setList);
  }
  const rendercake = ({ item }) => {
    return <Card {...item} cardPressed={(price,item) => onAddPress(price,item)} />
  }
  const onAddPress = (price,item) => {
    setTotal(total+price)
    setCartData(cartData+item)
  } 
  const setPageData = () => {
    if(!cartData || cartData == 'all'){
      return menuItems ; 
    }
    const filterdData = menuItems.find(product => product.title === cartData).products;
    return filterdData; 
  };
  useEffect(()=> {
    setMenuItems(menuData); 
},[]) 
// const addToCart = item => setCartData([...cartData, item]);

   const shopping  = require('../assets/icons8-shop-94.png');
   const plus = require('../assets/icons8-plus-24.png');
   const minuse = require('../assets/icons8-minus-24.png');
   const renderContent = () => (
    <View
      style={{
        backgroundColor: 'pink',
        padding:10,
        height:100,
        // marginTop:70,
      }}
    >
      <Text style={{fontSize:20,marginLeft:100}}>shopping Cart
      <Image
         source={shopping}
         style={[{ width: 40, height:40,}]}
        />
      </Text>
    </View>
  );
  const sheetRef = React.useRef(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

    return (
    <View style={{flex:1}}>
      <Header title={title}></Header>
      <Button title="Show Date Picker" color="pink" onPress={showDatePicker} />
      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <FlatList
        data={products}
        renderItem={rendercake}
        contentContainerStyle={{ paddingBottom:30}}
      />
        <View
       style={{
          // flex: 1,
          width:400,
          height:130,
          // backgroundColor: 'papayawhip',
          // alignItems: 'center',
          // justifyContent: 'center',
        }}
      >
        <Button
          title="Open Bottom Sheet"
          onPress={() => sheetRef.current.snapTo()}
          color="pink"
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[330,300,0]}
        renderContent={renderContent}
      />
      <Text style={{color:"black",marginLeft:150,fontSize:25}}>Total:
      <Text style={{color:"green"}}>$</Text>
      <Text style={{color:"black",marginLeft:40,fontSize:20}}>{total}
      </Text>
      </Text>
      <View style={styles.Card1}>
      <Image
        source={plus}
        style={[{ width:30, height:30,marginLeft:320,backgroundColor:"#EB9CB1"}]}/>
        <Image
        source={minuse}
        style={[{ width:30, height:30,marginLeft:320,backgroundColor:"#EB9CB1",marginTop:20}]}/>
        <FlatList
          data={setPageData}
          renderItem={rendercake}
          contentContainerStyle={{ paddingBottom: 30 }}
        />
      </View>
      <View>
      </View>
      <View>
      </View>
      </View>

    
  )
}
const styles = StyleSheet.create({
  Card1:{
    backgroundColor:"white",
    width:400,
    height:200,

  },
 
})


export default Cake;
