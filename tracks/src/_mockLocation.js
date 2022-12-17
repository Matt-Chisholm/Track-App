import * as Location from "expo-location";
import { useEffect, useState } from "react";

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: -122.03121 + increment * tenMetersWithDegrees,
      latitude: 37.33233 + increment * tenMetersWithDegrees,
    },
  };
};
