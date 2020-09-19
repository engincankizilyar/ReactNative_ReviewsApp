import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from "../shared/header";
import { Image } from "react-native";

const Stack = createStackNavigator();

export default AboutStack = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions = {{headerStyle: { backgroundColor:"#bbb" }}} >
            
            <Stack.Screen 
                name = "About"
                component = { About }
                options = {{
                    headerTitle: () => <Header navigation = { navigation } title = "About" />,
                    headerBackground: () => <Image source = { require("../assets/game_bg.png") } style = {{ height:60 }} />,
                }}
            />

        </Stack.Navigator>
    );
}