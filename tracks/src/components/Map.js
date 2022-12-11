import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MapView from "react-native-maps";

export default function Map() {
  return <MapView style={styles.map} />;
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
