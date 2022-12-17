import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import React, { useEffect, useState } from "react";
import Map from "../components/Map";
import { requestForegroundPermissionsAsync } from "expo-location";

export default function TrackCreateScreen() {
  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setErr(e);
    }
  };
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Create a Track</Text>
      <Map />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
