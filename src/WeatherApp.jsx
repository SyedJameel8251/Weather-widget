import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp(){
 const [weatherInfo , setWeatherInfo] = useState({
        city: "wonderland",
        feelsLike: 21.43,
        humidity: 43,
        pressure: 1016,
        temp: 22.05,
        tempMax: 22.05,
        tempMin: 22.05,
        weather: "smoke"
     });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:" center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo= {updateInfo}/>
            <InfoBox Info={weatherInfo}/>
        </div>
    );
}