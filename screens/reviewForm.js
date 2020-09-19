import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/button";

// this, reviewForm file: where is form component is gonna live.

const reviewSchema = yup.object({ // our validation scheme for right inputs.
    title: yup.string()
      .required()
      .min(5),
    body: yup.string()
      .required()
      .min(10),
    raiting: yup.string()
      .required()
      .test('is-num-1-5', 'Rating must be a number between 1 to 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
      }),
  });

const ReviewForm = ({ addReview }) => {
    return (
        <View style = {globalStyles.container}>

        <Formik
            initialValues={{ title: '', body: '', rating: '' }}
            validationSchema={reviewSchema}
            onSubmit={( values, actions ) => {
            actions.resetForm(); 
            addReview(values);
            }}>

            { props => (
                <View>

                    <TextInput
                        style = {globalStyles.input}
                        placeholder = "Review Title"
                        onChangeText = { props.handleChange("title") } 
                        value = { props.values.title }
                        onBlur = {props.handleBlur("title")}
                    />
                    
                    <Text style = {globalStyles.errorText}> { props.touched.title && props.errors.title } </Text>

                    <TextInput
                        multiline minHeight = {60}
                        style = {globalStyles.input}
                        placeholder = "Review Body"
                        onChangeText = { props.handleChange("body") }
                        value = { props.values.body }
                        onBlur = {props.handleBlur("body")}
                    />

                    <Text style = {globalStyles.errorText}> { props.touched.body && props.errors.body } </Text>

                    <TextInput
                        style = { globalStyles.input }
                        placeholder = "Rating (1-5)"
                        onChangeText = { props.handleChange("raiting") }
                        value = { props.values.raiting }
                        keyboardType = "numeric"
                        onBlur = {props.handleBlur("raiting")}
                    />

                    <Text style = {globalStyles.errorText}> { props.touched.raiting && props.errors.raiting } </Text>

                    <FlatButton text = "submıt" onPress = { props.handleSubmit } />

                </View>
            )}
            </Formik>

        </View>
    );
}

export default ReviewForm;
