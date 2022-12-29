import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import MapView, { Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

export default function Map() {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.33233,
        longitude: -122.03121,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}>
      <Polyline coordinates={points} />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
