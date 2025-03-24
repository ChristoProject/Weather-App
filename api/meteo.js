import axios from "axios";

export class MeteoAPI {
  static async fetchWeatherByCoords(coords) {
    return (
      await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=b9a5d809d5cb9d741ccfa2a152ac0046&units=metric`
      )
    ).data;
  }
}
