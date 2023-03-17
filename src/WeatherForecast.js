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
  
    console.log(forecasts)

    const pageReload = () => window. location. reload( true ) 
    

    return ( 
        
        <div className="weatherFocast">
            {isLoading && <h1 className='weather-loader'> Loading ... </h1>}
            { error && <h3 className='weather-error'> {error}</h3> }
            <h1>Three Days Weather Forecast</h1>

            
            {forecasts && <div className="hourly_forecast">

            <div className="forecast">
                
                <div className="forecast-current">
                    <button title="Back to current weather"
                    onClick={() =>{
                        history.push( "/weather" )
                        pageReload() 
                        }}><FaLongArrowAltLeft /> </button>
                    <h3>Current info</h3>
                    <img src={forecasts.forecast.forecastday[0].day.condition.icon}  />
                    <p>{forecasts.forecast.forecastday[0].day.condition.text}</p>
                    <h1>{forecasts.forecast.forecastday[0].day.avgtemp_c} °C</h1>
                    <small>Sunrise: {forecasts.forecast.forecastday[0].astro.sunrise}</small>
                    <small>Sunset: {forecasts.forecast.forecastday[0].astro.sunset}</small>
                </div>
                <div className="forecast-nextTwoDays">
                    <div className="forecast-day2">
                        <h3>Day 2 of the forecast</h3>
                        <img src={forecasts.forecast.forecastday[1].day.condition.icon}  />
                        <p>{forecasts.forecast.forecastday[1].day.condition.text}</p>
                        <h3>{forecasts.forecast.forecastday[1].day.avgtemp_c} °C</h3>
                    </div>
                    <div className="forecast-day3">
                        <h3>Day 2 of the forecast</h3>
                        <img src={forecasts.forecast.forecastday[2].day.condition.icon}  />
                        <p>{forecasts.forecast.forecastday[2].day.condition.text}</p>
                        <h3>{forecasts.forecast.forecastday[2].day.avgtemp_c} °C</h3>
                    </div>
                </div>
            </div>
            <div className="hourlyForecast"
            
            > 
                <ul className="forecast-hours">

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
                    
                    {/* { showMore ? text : `${text.substring(0, 5)}`}
                    <button onClick={ () => setShowMore(!showMore) }>
                        { showMore ? " Show less " : " Show more "}
                    </button> */}
                </ul>
            </div>
    
            </div>}
    

        </div>
     );
}
 
export default WeatherForecast;