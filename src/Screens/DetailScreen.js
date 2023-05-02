import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';

const DetailScreen = ({navigation,route}) => {

    const cake=route.params
    return (
        <SafeAreaView style={{flex:1,backgroundColorL:"pink"}}>
          <View style={styles.Header}>
            <Icon name="arrow-back" size={30} onPress={()=>navigation.goBack()}></Icon>
          </View>
          <View style={styles.imageContainer}></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Header:{
        paddingHorizontal:20,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    imageContainer:{
        flex:0.45,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default DetailScreen;
