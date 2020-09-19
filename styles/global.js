import { StyleSheet } from "react-native";

// globalStyles to use these styles in common for the all js file
export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleText: {
        fontSize: 18,
        fontFamily: "Nunito-Bold",
        color: "#333",
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    errorText: {
        color: "crimson",
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 6,
        textAlign: "center",
    },
    aboutPS: {
        marginTop: 24,
        fontSize: 16,
        color: "red",
        fontFamily: "Nunito-Bold",
    },
});

export const images = {
    ratings: {
        "1": require("../assets/rating-1.png"),
        "2": require("../assets/rating-2.png"),
        "3": require("../assets/rating-3.png"),
        "4": require("../assets/rating-4.png"),
        "5": require("../assets/rating-5.png"),
    }
};