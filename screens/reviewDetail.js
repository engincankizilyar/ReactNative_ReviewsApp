import React from "react";
import {StyleSheet, View, Text, Button, Image} from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";


export default function ReviewDetails({ route,navigation }){

    // taking parameter (data) from another screen.

    const {title} = route.params; 
    const {body} = route.params;
    const rating = route.params.raiting;
    return (
        <View style = {globalStyles.container}>
            <Card>

                <Text style = {globalStyles.titleText}> {title} </Text>
                <Text style = {globalStyles.titleText}> {body} </Text>

                <View style = {styles.raiting}>
                    <Text> GameZone Raiting: </Text>
                    <Image source = { images.ratings[rating] }/>
                </View>

            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    raiting: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 12,
        marginTop: 16,
        paddingBottom: 8,
        borderWidth: 1,
        borderTopColor: "#eee",
    },
});