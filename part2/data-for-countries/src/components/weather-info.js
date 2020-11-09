import React from "react";

const WeatherInfo = ({ weatherData }) => (
  <>
    {weatherData && (
      <>
        <h2>Weather in {weatherData?.location.name}</h2>
        <>
          <span >Temperature: </span>
          <span>{weatherData?.current.temperature} &deg; Celsius</span>
        </>
        <>
          <img
            src={weatherData?.current.weather_icons[0]}
            alt="symbol for showing the weather"
          />
        </>
        <>
          <span >Wind: </span>
          <span>{weatherData?.current.wind_speed} mph </span>
          <span>direction {weatherData?.current.wind_dir}</span>
        </>
      </>
    )}
  </>
);

export default WeatherInfo;