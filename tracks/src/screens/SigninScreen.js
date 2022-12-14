import { View, StyleSheet } from "react-native";
import React, { useContext } from "react";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {
  Context as AuthContext,
  clearErrorMessage,
} from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";

export default function SigninScreen() {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText='Sign In to Your Account'
        errorMessage={state.errorMessage}
        submitButtonText='Sign In'
        onSubmit={signin}
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
