import React, {  useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { headerImages } from '../assets/headerImages/headerImages';
import Card from '../component/Card';
import Header from '../component/Header';
import PagrTitle from '../component/PagrTitle';

const Cake = (props) => {
  const { products,} = props.route.params?.data || {}
  const [ total, setTotal ] = useState(0)
  const rendercake = ({ item }) => {
    return <Card {...item} cardPressed={(price) => onAddPress(price)} />
  }
  const [counter, setCounter] = useState(0);

  const sum = counter * props.value

  const onAddPress = (price) => {
    setTotal(total + price)
  }
  return (
    <View style={{flex:1}}>
      <Header title="drink"/> 
       <PagrTitle source={headerImages[[]]}/>
      <FlatList
        data={products}
        renderItem={rendercake}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
      <View style={styles.Card}>
      <Text style={{color:"red",marginLeft:40,}}>price:</Text>
      <Text style={{color:"blue",marginLeft:40}}>{total}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    Card: {
    width:350,
    height:90,
    borderWidth: 0.75,
    borderColor: "pink",
    borderRadius:30,
    marginLeft:20,
    backgroundColor: '#F89DAE',
    paddingBottom: 10,
    shadowColor: 'red',
    shadowOffset: {
      width: 50,
      height: 50
    },
    shadowOpacity: 0.75,
    shadowRadius: 15,
    elevation: 10,
    
  },

})


export default Cake;
