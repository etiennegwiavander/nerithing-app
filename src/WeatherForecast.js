import { API_key, BASE_URL } from "./api";
import { useState } from "react";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import { FaLongArrowAltLeft } from 'react-icons/fa';
import "./forecast.css"

const WeatherForecast = () => {

    const [city, setCity] = useState("Bamenda")
    const [showMore, setShowMore] = useState( false)
    const [showForecast, setShowForecast] = useState(true);
    
    
    // const [hourlyForecast, setHourlyForecast] = useState([])

    let URL = `${BASE_URL}/forecast.json?q=${city}&days=3`
    
    const options = {
        headers: {
            'X-RapidAPI-Key':`${API_key}` ,
        }
    }
    const {fetchedData: forecasts, isLoading, error} = useFetch(URL, options) 
    const history = useHistory();
  
    const pageReload = () => window. location. reload( true )
    
    // const arrays = forecasts.forecastday[0].hour
    // const data = arrays?.map((array) => <li> {array} </li>)
    console.log(forecasts)

    return ( 
        
        <div className="weather_forecast" >
            {isLoading && <h1 className='weather-loader'> Loading ... </h1>}
            { error && <h3 className='weather-error'> {error}</h3> }
            <h3 className="weather_forecast_header">Three Days Weather Forecast</h3>

            {forecasts && <div className="hourly_forecast">

            <div className="forecast">
                
                <div className="forecast_current">
                   <div className="current_weather_forecast"> 
                        <button title="Back to current weather"
                            onClick={() =>{
                                history.push( "/weather" )
                                pageReload() 
                                }}> <FaLongArrowAltLeft bounce />
                                
                        </button>
                        
                            
                        <h3>Current info</h3>
                    </div>
                    <img src={forecasts.forecast.forecastday[0].day.condition.icon}  />
                    <p>{forecasts.forecast.forecastday[0].day.condition.text}</p>
                    <h1>{forecasts.forecast.forecastday[0].day.avgtemp_c} °C</h1>
                    <small>Sunrise: {forecasts.forecast.forecastday[0].astro.sunrise}</small>
                    <small>Sunset: {forecasts.forecast.forecastday[0].astro.sunset}</small>
                </div>
                <div className="forecast-nextTwoDays">
                    <div className="forecast-day2">
                        <h3>TOMORROW: { forecasts.forecast.forecastday[1].date } </h3>
                        <img src={forecasts.forecast.forecastday[1].day.condition.icon}  />
                        <p>{forecasts.forecast.forecastday[1].day.condition.text}</p>
                        <h3>{forecasts.forecast.forecastday[1].day.avgtemp_c} °C</h3>
                    </div>
                    <div className="forecast-day3">
                        <h3>OVERMORROW: { forecasts.forecast.forecastday[2].date }</h3>
                        <img src={forecasts.forecast.forecastday[2].day.condition.icon}  />
                        <p>{forecasts.forecast.forecastday[2].day.condition.text}</p>
                        <h3>{forecasts.forecast.forecastday[2].day.avgtemp_c} °C</h3>
                    </div>
                </div>
            </div>
            <h5 className="tomorrow_hourly_forecast">Tomorrows Hourly Forecast from 6am to 6pm</h5>
            <div className="hourlyForecast"
            
            > 
                <ul className="forecast-hours">
                    {/* { forecasts?.map((forecast, index) => {
                        return(
                            <li key = {index}>
                                <p> { forecast.forecastday[0].hour[0].time } </p>
                                <img src={ forecast.forecastday[0].hour[0].condition.icon } />
                                <p>
                                { forecast.forecastday[0].hour[0].temp_c }
                                </p>

                            </li>
                            
                        )
                    })} */}
                    
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