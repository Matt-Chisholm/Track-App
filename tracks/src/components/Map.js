import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import MapView, { Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

export default function Map() {
  const { state } = useContext(LocationContext);

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 48.43002,
        longitude: -123.36302,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}>
      <Polyline coordinates={null} />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
