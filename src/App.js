import { useState } from "react";
import Elorejelzes from "./Components/Elorejelzes/Elorejelzes";
import VarosUrlap from "./Components/VarosUrlap/VarosUrlap";

function App() {
  const [idojarasInfo, setIdojarasInfo] = useState(null);

  const queryWeather = (varos) => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${varos.latitude}&longitude=${varos.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max,winddirection_10m_dominant&timezone=auto`
    ).then((res) =>
      res.json().then((data) => setIdojarasInfo({ varos, idojaras: data }))
    );
  };

  const getCity = (varosInfo) => {
    fetch(
      "https://geocoding-api.open-meteo.com/v1/search?name=" + varosInfo
    ).then((res) =>
      res.json().then((data) => {
        if (Array.isArray(data.results) && data.results.length > 0) {
          queryWeather(data.results[0]);
        } else {
          alert("Hibás Város!");
        }
      })
    );
  };

  return (
    <div>
      <h1>Időjárás előrejelzés</h1>
      <VarosUrlap getCity={getCity} />
      <Elorejelzes idojarasInfo={idojarasInfo} />
    </div>
  );
}

export default App;
