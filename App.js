/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Colors,
} from 'react-native';
import Page1 from './src/Screens/conditoria';
import Header from './src/component/Header';
import Mainnavigation from './src/route/nav';
import MenuProvider from './src/store/MenuProvider';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {

  useEffect(() => {
    var URL="https://nameless-meadow-25389.herokuapp.com/nazareth";
    fetch (URL)
    .then (res => res.json())
    .then (resJson => console.log("response from server",resJson))
  }, []);
  
  return (
    <MenuProvider>
      <View style={{ flex: 1 }}>
        <Mainnavigation />
        {/* <Page1 /> */}
        {/*  <View></View> */}

      </View>
    </MenuProvider>
  )

};



const styles = StyleSheet.create({

  
});

export default App;
