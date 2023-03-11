import { API_key, BASE_URL } from "./api";
import { useState } from "react";
import useFetch from "./useFetch";

const WeatherForecast = () => {

    const [city, setCity] = useState("Bamenda")
    const [hourlyForecast, setHourlyForecast] = useState([])

    let URL = `${BASE_URL}/forecast.json?q=${city}`
    
    const options = {
        headers: {
            'X-RapidAPI-Key':`${API_key}` ,
        }
    }
    const {fetchedData, isLoading, error} = useFetch(URL, options) 
    setHourlyForecast(fetchedData)
 
    return ( 
        <div className="weatherFocast">
            {isLoading && <h1 className='weather-loader'> Loading ... </h1>}
            { error && <h3 className='weather-error'> {error}</h3> }
            <h1>Three Days Weather Forecast</h1>

            
            {hourlyForecast && <div className="hourly_forecast">
                {hourlyForecast.map((data, key)=>(
                    <div  key={key}>
                        <p>
                            {data.forecastday}
                        </p>
                        <img src={ data.forecastday[0].hour.condition.icon} />
                
                    </div>

                ))}  
    
            </div>}
    

        </div>
     );
}
 
export default WeatherForecast;