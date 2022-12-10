import { View, Text, StyleSheet, Button } from "react-native";
import React, { useContext } from "react";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-navigation";

export default function AccountScreen() {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <Text style={styles.text}>Signed in</Text>
      <Spacer>
        <Button
          style={styles.button}
          title='Sign Out'
          onPress={() => signout()}
        />
      </Spacer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
  text: {
    fontSize: 48,
    alignSelf: "center",
  },
  button: {
    margin: 10,
  },
});
