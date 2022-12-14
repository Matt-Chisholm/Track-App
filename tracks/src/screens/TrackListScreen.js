import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function TrackListScreen({ navigation }) {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button
        title='Go to Track Detail'
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
