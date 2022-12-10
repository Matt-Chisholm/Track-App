import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import React from "react";
import Map from "../components/Map";

export default function TrackCreateScreen() {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Create a Track</Text>
      <Map />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
