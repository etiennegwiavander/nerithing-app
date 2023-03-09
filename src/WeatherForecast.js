import useFetch from "./useFetch";
import { API_key, BASE_URL } from "./api";
import { useState } from "react";

const WeatherForecast = () => {

    const [city, setCity] = useState("Bamenda")

    let URL = `${BASE_URL}/forecast.json?q=${city}`
    
    const options = {
        headers: {
            'X-RapidAPI-Key':`${API_key}` ,
        }
    }
    const {fetchedData, isLoading, error} = useFetch(URL, options) 

    console.log("Weather Forecast")
    
    return ( 
        <div className="weatherFocast">
            <h1>Weather Forecast</h1>
        </div>
     );
}
 
export default WeatherForecast;