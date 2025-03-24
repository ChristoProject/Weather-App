import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, Text } from "react-native";
import { s } from "./App.style";
import backgroundImg from "./assets/background.png";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { MeteoAPI } from "./api/meteo";

function App() {
  const [coordinates, setCoordinates] = useState();
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherByCoords(coordinates);
    }
  }, [coordinates]);

  async function fetchWeatherByCoords(coordinates) {
    const weatherResponse = await MeteoAPI.fetchWeatherByCoords(coordinates);
    setWeatherData(weatherResponse);
  }

  async function getUserCoordinates() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      });
    } else {
      console.log("Permission denied");
    }
  }

  console.log(coordinates);
  console.log(weatherData);

  return (
    <ImageBackground source={backgroundImg} style={s.imgBG}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

export default App;
