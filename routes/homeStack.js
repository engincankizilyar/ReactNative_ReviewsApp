import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetail";
import Header from "../shared/header";
import { Image } from "react-native";

export default HomeStack = ({ navigation }) =>{
    return (
        <Stack.Navigator screenOptions = {{ headerStyle: {backgroundColor:"#bbb" }}}>
            
            <Stack.Screen 
                name = "Home" 
                component = {Home} 
                options = {{ 
                    headerTitle: () => <Header navigation = { navigation } title ="GameZone" />,
                    headerBackground: () => <Image source = { require("../assets/game_bg.png") } style = {{ height:60 }} />,
                }}
             />

            <Stack.Screen 
                name = "ReviewDetails"
                component = { ReviewDetails }
                options = {{ title: "ReviewDetails" }}
            />

        </Stack.Navigator>
    );
}

const Stack = createStackNavigator();
