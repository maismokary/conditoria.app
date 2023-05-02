import React from 'react'
import { StyleSheet, View } from 'react-native';
import  Rating  from './Rating';

const RatingStar = () => {
  return (
    <View style={styles.container}>
      <Rating
        starSize={30}
        defaultRating={0}
        count={5}
        readonly={false}
        onRatingFinished={(rating) => console.log(rating)}
      />
    </View> 
  )
}
const radius=20
const styles = StyleSheet.create({
  container: {
      borderRadius:20,
      marginTop:10,
      marginRight:30,
    backgroundColor:'#FFCCDD' , 
  }


});
export default RatingStar;
