import { API_key, BASE_URL } from "./api";
import { useState } from "react";
import useFetch from "./useFetch";
import "./forecast.css"

const WeatherForecast = () => {

    const [city, setCity] = useState("Bamenda")
    
    // const [hourlyForecast, setHourlyForecast] = useState([])

    let URL = `${BASE_URL}/forecast.json?q=${city}&days=3`
    
    const options = {
        headers: {
            'X-RapidAPI-Key':`${API_key}` ,
        }
    }
    const {fetchedData: forecasts, isLoading, error} = useFetch(URL, options) 

    console.log(forecasts)
    return ( 
        
        <div className="weatherFocast">
            {isLoading && <h1 className='weather-loader'> Loading ... </h1>}
            { error && <h3 className='weather-error'> {error}</h3> }
            <h1>Three Days Weather Forecast</h1>

            
            {forecasts && <div className="hourly_forecast">

            <div class="forecast">
                <div class="current">
                    <h3>Current info</h3>
                </div>
                <div class="nextTwoDays">
                    <div class="day2">
                        <h3>Day 2 of the forecast</h3>
                    </div>
                    <div class="day3">
                        <h3>Day 2 of the forecast</h3>
                    </div>
                </div>
            </div>
            <div class="hourlyForecast"> 
                <ul class="hours">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                    <li>4</li>
                </ul>
            </div>
    
            </div>}
    

        </div>
     );
}
 
export default WeatherForecast;