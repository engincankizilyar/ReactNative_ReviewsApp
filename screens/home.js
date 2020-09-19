import React, {useState} from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import Icon from "react-native-vector-icons/Ionicons";
import ReviewForm  from "./reviewForm";

export default function Home({ navigation }){

    const [modalOpen,setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: "Max Payne 2 The Fall of Max Payne", raiting: 5, body:"review body", key: "1" },
        { title: "The Witcher 3 Wild Hunt", raiting: 5, body: "review body", key: "3" },
        { title: "Mafia 1", raiting: 5, body: "review body", key: "5" },
        { title: "Half-Life", raiting: 5, body: "review body", key: "4" },
        { title: "Dishonored", raiting: 4, body: "review body", key: "2" },
        { title: "Watch Dogs", raiting: 3, body: "review body", key: "6" },
        { title: "Assasin's Creed Unity", raiting: 2, body: "review body", key: "7" },
        { title: "Mafia 3", raiting: 1, body: "review body", key: "8" },
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();  // not the best way.
        setReviews(( currentReviews ) => {
            return [review, ...currentReviews];
        });
        setModalOpen(false); // after entering input, closing the modal.
    }

    // sending data when we navigating another screen:
    return (
        <View style = {globalStyles.container}>

            <Modal visible = {modalOpen} animationType = "slide" >
                <TouchableWithoutFeedback onPress = { () => Keyboard.dismiss() }>

                    <View style = {styles.modalContent}>
                        <Icon 
                            name = "md-close" 
                            size = {24}
                            style = { {...styles.modalToggle, ...styles.modalClose} }
                            onPress = { () => setModalOpen(false) } />

                        <ReviewForm addReview = {addReview} />           
                    </View>

                </TouchableWithoutFeedback>
            </Modal>

            <Icon 
            name = "md-add" 
            size = {30}
            style = { styles.modalToggle }
            onPress = { () => setModalOpen(true) } />

            <FlatList 
                data = {reviews}
                renderItem = { ({ item }) => (
                    <TouchableOpacity onPress = { () => navigation.navigate("ReviewDetails", item) }> 
                        <Card>
                            <Text style = {globalStyles.titleText}> { item.title } </Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#f2f2f2",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center",
    },
    modalClose: {
        marginTop: 15,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    },
});
