import React from "react";
import {StyleSheet, View, Text} from "react-native";
import { globalStyles } from "../styles/global";

export default function About(){
    return (
        <View style = {globalStyles.container}>
            <Text style = {globalStyles.titleText}> This App developed by Engincan Kızılyar (aka:Redcliff) </Text>
            <Text style = {globalStyles.aboutPS}> PS: While i'm doing this app , i also got help from various helpful React Native resources</Text>
        </View>
    );
}
