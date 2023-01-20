import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useContext } from "react";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

export default function Map() {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size='large' style={{ marginTop: 200 }} />;
  }

  const initialLocation = {
    longitude: -123.36302,
    latitude: 48.43002,
  };

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...initialLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}>
      <Circle
        center={currentLocation.coords}
        radius={40}
        strokeColor='rgba(158, 158, 255, 1.0)'
        fillColor='rgba(158, 158, 255, 0.3)'
      />
      <Polyline coordinates={locations.map((loc) => loc.coords)} />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
