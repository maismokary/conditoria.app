import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { screenName } from '../route/ScreenNames';

const Category = (props) => {
    const { title} = props;
  const navigation = useNavigation();
  const onCardsPress = () => {
    useNavigation.navigate(screenName.cake, { data: props })
  };
    return (
        <TouchableOpacity style={[styles.container]} onPress={onCardsPress} activeOpacity={0.6}>
       <View style={styles.container}>
        <Text style={{width:20,height:20}}>{title}</Text>

       </View>
       </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        width:380,
        height:120,
        backgroundColor:"pink"
        
    }
    
})

export default Category;
