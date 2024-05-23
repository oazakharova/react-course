/*
Температурный конвертер с Material UI

Цель: Создать компонент TemperatureConverter,
используя компоненты TextField и Button из Material UI
для ввода и отображения температур в градусах Цельсия и Фаренгейта.

Компоненты:
Используйте TextField для ввода значения температуры.
Добавьте лейблы к каждому TextField,
указывая единицы измерения (Цельсия и Фаренгейта).

Логика:
При вводе значения в одно поле
автоматически конвертируйте его и отобразите в другом.

Реализуйте конвертацию температур в обоих направлениях.
*/

import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    setCelsius(e.target.value);
    setFahrenheit("");
  };

  const handleFahrenheitChange = (e) => {
    setFahrenheit(e.target.value);
    setCelsius("");
  };

  const handleConversion = () => {
    if (celsius !== "") {
      const fahrenheitValue = (parseFloat(celsius) * 9) / 5 + 32;
      setFahrenheit(fahrenheitValue.toFixed(2));
    } else if (fahrenheit !== "") {
      const celsiusValue = ((parseFloat(fahrenheit) - 32) * 5) / 9;
      setCelsius(celsiusValue.toFixed(2));
    }
  };

  return (
    <div>
      <h1>Температурный конвертер</h1>
      <div>
        <TextField
          label="градус Цельсия °C"
          variant="outlined"
          value={celsius}
          onChange={handleCelsiusChange}
        />
        -
        <TextField
          label="градус Фаренгейта °F"
          variant="outlined"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>

      <Button variant="contained" color="primary" onClick={handleConversion}>
        конвертировать
      </Button>
    </div>
  );
}

export default TemperatureConverter;
