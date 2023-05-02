import React from 'react'
import { Text, View } from 'react-native';

const Strings=() =>{
    const HomeData=[
        {
          title:'conditoria',
        },
       
      ]
     
   
      const renderHome = () => {
        const HomeArr = HomeData.map(HomeDataItem => {
          return < HomeScreen  {...HomeDataItem} />
        }); 
        return HomeArr;
      };  
  return (
    <View>
        <View>
            {renderHome()}
        </View>
     
         <Text>Strings</Text>

    </View>
  
   
  )
}
export default Strings;
