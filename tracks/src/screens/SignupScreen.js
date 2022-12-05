import { View, StyleSheet } from "react-native";
import React from "react";
import { Text, Input, Button } from "react-native-elements";

export default function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle} h3>
        Sign Up for Tracker
      </Text>
      <Input label='Email' />
      <Input label='Password' />
      <Button title='Sign Up' />
    </View>
  );
}

const styles = StyleSheet.create({});
