import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNav from './stack';
const Drawer = createDrawerNavigator();
const myDrawer = () => {
    const param = {
        HomeScreen: {
            name: "stackNav",
            component: StackNav,
            
        }
    }
    return (
        <Drawer.Navigator {...param.navigator}>
            <Drawer.Screen {...param.HomeScreen} />
        </Drawer.Navigator>
    );
}
export default myDrawer;