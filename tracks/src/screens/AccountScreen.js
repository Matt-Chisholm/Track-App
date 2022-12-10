import { View, Text, StyleSheet, Button } from "react-native";
import React, { useContext } from "react";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-navigation";

export default function AccountScreen() {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer>
        <Button title='Sign Out' onPress={() => signout()} />
      </Spacer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
