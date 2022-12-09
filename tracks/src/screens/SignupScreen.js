import { View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useContext } from "react";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

export default function SignupScreen({ navigation }) {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Spacer>
          <Text style={{ color: "blue" }}>
            Already have an account? Sign in
          </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});
