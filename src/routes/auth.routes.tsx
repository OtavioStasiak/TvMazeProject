import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../screens/Home";
import { ShowDetails } from "../screens/ShowDetails";

const Drawer = createDrawerNavigator();


function Menu(){
    return(
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home}/>

        </Drawer.Navigator>
    )
};

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator headerMode="none" screenOptions={{cardStyle: {backgroundColor: '#fff'}}} >

            <Screen name="Home"component={Menu}/>

            <Screen name="ShowDetails" component={ShowDetails} />

        </Navigator>

    )
}