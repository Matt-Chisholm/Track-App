import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function SignupScreen({ navigation }) {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>SignupScreen</Text>
      <Button
        title='Go to Signin'
        onPress={() => navigation.navigate("Signin")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
