import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city , setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "642e6d822da89afe2dcf1eae7013eccc";

    let getWeartherInfo = async () => {
        try{
        let Response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!Response.ok) {
            throw new Error("City not found");
        }
        let jsonResponse = await Response.json();
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            pressure: jsonResponse.main.pressure,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        }
        
        return result;
      }catch(error){
        throw error;
      }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
        setError(false);
    };

    let handleSubmit = async(evt) => {
        evt.preventDefault();
        setError(false);
        try{
        let newInfo = await getWeartherInfo();
        setCity("");
        updateInfo(newInfo);
        }catch(error){
            setError(true);
        }
    };

    return(
        <div className="searchbox">
            <form onSubmit={handleSubmit}> 
            <TextField id="city" 
             label="City Name"
             variant="outlined"
              required 
              value={city}
              onChange={handleChange}
              />
            <br /><br />
            <Button variant="contained" type="submit" >Search</Button>
            {error && <p style={{color: "red"}}>No such place exists..!</p>}
            </form>
        </div>
       
    );
}
