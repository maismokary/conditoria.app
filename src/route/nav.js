
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
// import MyDrawer from "./Drawer";
import StackNav from "./stack";
const Mainnavigation =(props) => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator
           screenOptions={{
            headerShown: false
        }}>
          {/* <Stack.Screen name={'drawer'} component={MyDrawer} />  */}
          <Stack.Screen name={'Stack'} component={StackNav} /> 
        </Stack.Navigator>
    </NavigationContainer>

  )
}
export default Mainnavigation;
