import { API_key, BASE_URL } from "./api";
import { useState } from "react";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import { FaLongArrowAltLeft } from 'react-icons/fa';
import "./forecast.css"

const WeatherForecast = () => {

    const [city, setCity] = useState("Bamenda")
    // const [showMore, setShowMore] = useState( false)
    // const [showForecast, setShowForecast] = useState(true);
    
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
    
    console.log(forecasts)

    return ( 
        <div className="weather_forecast" >
            { isLoading && <h1 className='weather-loader'> Loading ... </h1> }
            { error && <h3 className='weather-error'> {error}</h3> }
            { forecasts && <h4 className="weather_forecast_header">Three Days Weather Forecast</h4> }
            
            {forecasts && <div  className="hourly_forecast">
            <div className="forecast">
                
                <div className="forecast_current">
                   <div className="current_weather_forecast"> 
                        <button  title="Back to current weather"
                            onClick={() =>{
                                history.push( "/weather" )
                                pageReload() 
                                }}> <FaLongArrowAltLeft  />
                                
                        </button>
                        
                            
                        <h3>Today's Weather info</h3>
                    </div>
                    <img alt=" icon " src={forecasts.forecast.forecastday[0].day.condition.icon}  />
                    <p>{forecasts.forecast.forecastday[0].day.condition.text}</p>
                    <h1>{forecasts.forecast.forecastday[0].day.avgtemp_c} °C</h1>
                    <small>Sunrise: <span> {forecasts.forecast.forecastday[0].astro.sunrise} </span></small>
                    <small>Sunset: <span> {forecasts.forecast.forecastday[0].astro.sunset} </span></small>
                </div>
                <div className="forecast-nextTwoDays">
                    <div className="forecast-day2">
                        <h5>TOMORROW: { forecasts.forecast.forecastday[1].date } </h5>
                        <img alt=" icon " src={forecasts.forecast.forecastday[1].day.condition.icon}  />
                        <p>{forecasts.forecast.forecastday[1].day.condition.text}</p>
                        <h5>{forecasts.forecast.forecastday[1].day.avgtemp_c} °C</h5>
                    </div>
                    <div className="forecast-day3">
                        <h5>OVERMORROW: { forecasts.forecast.forecastday[2].date }</h5>
                        <img alt=" icon " src={forecasts.forecast.forecastday[2].day.condition.icon}  />
                        <p>{forecasts.forecast.forecastday[2].day.condition.text}</p>
                        <h5>{forecasts.forecast.forecastday[2].day.avgtemp_c} °C</h5>
                    </div>
                </div>
            </div>
            <h5 className="tomorrow_hourly_forecast">Tomorrow's Hourly Forecast from 6am to 6pm</h5>
            <div className="hourlyForecast"> 
                <ul className="forecast-hours">
                    
                    <li title= { forecasts.forecast.forecastday[1].hour[6].condition.text} >
                        <small> { "06:00 AM" } </small>
                        <img src={ forecasts.forecast.forecastday[1].hour[6].condition.icon } />
                        <small> { forecasts.forecast.forecastday[1].hour[6].temp_c } °C</small>
                    </li>
                    <li title= { forecasts.forecast.forecastday[1].hour[7].condition.text} >
                        <small> { "07:00 AM" } </small>
                        <img src={ forecasts.forecast.forecastday[1].hour[7].condition.icon } />
                        <small> { forecasts.forecast.forecastday[1].hour[7].temp_c } °C</small>
                    </li>
                    <li title= { forecasts.forecast.forecastday[1].hour[8].condition.text} >
                        <small> { "08:00 AM" } </small>
                        <img src={ forecasts.forecast.forecastday[1].hour[8].condition.icon } />
                        <small> { forecasts.forecast.forecastday[1].hour[8].temp_c } °C</small>
                    </li>
                    <li title= { forecasts.forecast.forecastday[1].hour[9].condition.text} >
                        <small> { "09:00 AM" } </small>
                        <img src={ forecasts.forecast.forecastday[1].hour[9].condition.icon } />
                        <small> { forecasts.forecast.forecastday[1].hour[9].temp_c } °C</small>
                    </li>
                    <li title= { forecasts.forecast.forecastday[1].hour[10].condition.text} >
                        <small> { "10:00 AM" } </small>
                        <img src={ forecasts.forecast.forecastday[1].hour[10].condition.icon } />
                        <small> { forecasts.forecast.forecastday[1].hour[10].temp_c } °C</small>
                    </li>
                    <li title= { forecasts.forecast.forecastday[1].hour[11].condition.text} >
                        <small> { "11:00 AM" } </small>
                        <img src={ forecasts.forecast.forecastday[1].hour[11].condition.icon } />
                        <small> { forecasts.forecast.forecastday[1].hour[11].temp_c } °C</small>
                    </li>
                    <li title= { forecasts.forecast.forecastday[1].hour[12].condition.text} >
                        <small> { "12:00 PM" } </small>
                        <img src={ forecasts.forecast.forecastday[1].hour[12].condition.icon } />
                        <small> { forecasts.forecast.forecastday[1].hour[12].temp_c } °C</small>
                    </li>
                    <li title= { forecasts.forecast.forecastday[1].hour[13].condition.text} >
                        <small> { "01:00 PM" } </small>
                        <img src={ forecasts.forecast.forecastday[1].hour[13].condition.icon } />
                        <small> { forecasts.forecast.forecastday[1].hour[13].temp_c } °C</small>
                    </li>
                    <li title= { forecasts.forecast.forecastday[1].hour[14].condition.text} >
                        <small> { "02:00 PM"  } </small>
                        <img src={ forecasts.forecast.forecastday[1].hour[14].condition.icon } />
                        <small> { forecasts.forecast.forecastday[1].hour[14].temp_c } °C</small>
                    </li>
                    <li title= { forecasts.forecast.forecastday[1].hour[15].condition.text} >
                        <small> { "03:00 PM" } </small>
                        <img src={ forecasts.forecast.forecastday[1].hour[15].condition.icon } />
                        <small> { forecasts.forecast.forecastday[1].hour[15].temp_c } °C</small>
                    </li>
                    <li title= { forecasts.forecast.forecastday[1].hour[16].condition.text} >
                        <small> { "04:00 PM" } </small>
                        <img src={ forecasts.forecast.forecastday[1].hour[16].condition.icon } />
                        <small> { forecasts.forecast.forecastday[1].hour[16].temp_c } °C</small>
                    </li>
                    <li title= { forecasts.forecast.forecastday[1].hour[17].condition.text} >
                        <small> { "05:00 PM" } </small>
                        <img src={ forecasts.forecast.forecastday[1].hour[17].condition.icon } />
                        <small> { forecasts.forecast.forecastday[1].hour[17].temp_c } °C</small>
                    </li>
                    <li title= { forecasts.forecast.forecastday[1].hour[18].condition.text} >
                        <small> { "06:00 PM" } </small>
                        <img src={ forecasts.forecast.forecastday[1].hour[18].condition.icon } />
                        <small> { forecasts.forecast.forecastday[1].hour[18].temp_c } °C</small>
                    </li>
               
                      
                </ul>
            </div>
    
            </div>}
    

        </div>
     );
}
 
export default WeatherForecast;