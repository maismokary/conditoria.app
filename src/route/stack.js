import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Page1 from "../Screens/conditoria";
import Header from "../component/Header";
import { screenName } from "./ScreenNames";
import Cake from "../Screens/cake";
import RatingStar from "../component/RatingStar";
import HomeScreen from "../Screens/HomeScreen";
import SearchBar from "../Screens/SearchBar";
import SearchScreen from "../Screens/SearchScreen";
import MenuProvider from "../store/MenuProvider";
const StackNav = (props) => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
           initialRouteName="Drawer"
            screenOptions={{
               headerStyle:{
                  backgroundColor:"#28463e"
               },
               headerTintColor:"pink",
               headerTitleAlign:"center"
            }}>
            <Stack.Screen name={screenName.HomeScreen} component={HomeScreen}
               options={{
                headerShown:false,
               }}
             />
            <Stack.Screen name={screenName.Page1} component={Page1} 
             options={{
                headerShown:false,
               }}
            />
            <Stack.Screen name={screenName.cake} component={Cake}
             options={{
                headerShown:false,
               }}
            />
            <Stack.Screen name={screenName.Header} component={Header}
              options={{
                headerShown:false,
               }}
             />
            <Stack.Screen name={screenName.RatingStar} component={RatingStar} 
             options={{
                headerShown:false,
               }}
            />
            <Stack.Screen name={screenName.SearchBar} component={SearchBar} 
             options={{
                headerShown:false,
               }}
            />
            <Stack.Screen name={screenName.SearchScreen} component={SearchScreen} 
             options={{
                headerShown:false,
               }}
            />
            <Stack.Screen name={screenName.MenuProvider} component={MenuProvider}
             options={{
                headerShown:false,
               }}
             />
        </Stack.Navigator>
    )
} 
export default StackNav ; 