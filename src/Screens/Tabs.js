import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { screenName } from '../route/ScreenNames';
import HomeScreen from './HomeScreen';

const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
    const param = {
        navigator:{
            HomeScreen:{
                name: screenName.HomeScreen,
                component: HomeScreen,
            }
        }
    }
  return (
    <Tab.Navigator {...param.navigator} >
         <Tab.Screen {...param.HomeScreen} />
    </Tab.Navigator>
  );
}
export default MyTabs