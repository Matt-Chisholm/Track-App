import { useState, useEffect } from "react";
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

export default (callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    const startWatching = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync();
        if (!granted) {
          throw new Error("Location permission not granted");
        }
        await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback
        );
      } catch (e) {
        setErr(e);
      }
    };

    useEffect(() => {
      startWatching();
    }, []);

    return () => {
      if (subscriber) {
        subscriber.remove();
        console.log(subscriber);
      }
    };
  }, [callback]);

  return [err];
};
