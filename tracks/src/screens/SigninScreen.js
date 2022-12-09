import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

export default function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign In to Your Account'
        errorMessage=''
        submitButtonText='Sign In'
        onSubmit={() => {}}
      />
      <NavLink
        routeName='Signup'
        text="Don't have an account? Sign up instead"
      />
    </View>
  );
}

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});
