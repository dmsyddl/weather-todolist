import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState("");
  const API_KEY = "7716362d57cde31609c5347408b7cfb7";

  const onGeoOk = (position) => {
    // lat: 위도, lon: 경도
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    if (weather.length !== 0) return;
    axios.get(url).then((responseData) => {
      const data = responseData.data;
      setWeather({
        id: data.weather[0].id,
        temp: data.main.temp,
        weather: data.weather[0].main,
        location: data.name,
      });
    });
  };

  const onGeoError = () => {
    alert("현재 위치를 찾을 수 없습니다.");
  };
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

  return (
    <div>
      <div>온도: {weather.temp} °C</div>
      <div>날씨: {weather.weather}</div>
    </div>
  );
};

export default Weather;
