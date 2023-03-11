import weathercss from './weather.module.css'
import { API_key, BASE_URL } from "./api";
import useFetch from "./useFetch";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import WeatherForcast from './WeatherForecast';


const WeatherDetails = () => {

    const [city, setCity] = useState("Bamenda")
    const [showForecast, setShowForecast] = useState(true);

    let URL = `${BASE_URL}/current.json?q=${city}`

    const options = {
        headers: {
            'X-RapidAPI-Key':`${API_key}` ,
        }
    }

    // to only alow the input update the state of the app when the user is done typing

    const {fetchedData, isLoading, error} = useFetch(URL, options)  
 
    
    const history = useHistory();

    return ( 
        <div className={weathercss.weatherDetails}>

           <form className='weather-input' >
                <input type="text"  
                    required
                    value={ city }
                    onChange = {(e)=> setCity(e.target.value)}
                    placeholder='type city name'
                    
                />
            </form>
            
                { isLoading && <h1 className='weather-loader'> Loading ... </h1>}
                { error && <h3 className='weather-error'> {error}</h3> }
                {fetchedData &&  
                <div className= "weather_content">
                    {showForecast && <div>
                        <div className="weather-location">

                            <div className="location-time">
                                <p>Local time: { fetchedData.location.localtime }</p>
                                <p>Last Updated: { fetchedData.current.last_updated }</p>  
                            </div>
                            
                            <div className="location-date">
                                <p className='weather-city'>{ fetchedData.location.name }</p>
                                <p>{ fetchedData.location.region }, { fetchedData.location.country }</p>                          
                            </div>

                        </div>
                        <div className='weather-temperature'> 
                            <h1>🌡</h1>
                            <p >{ fetchedData.current.temp_c } °C/ { fetchedData.current.temp_f } °F</p>
                        </div>
                            
                        <div className="conditions" onClick={() => {
                            history.push('/weather/weatherforecast')
                            setShowForecast(!showForecast)}}>
                        
                            <div className="conditions-icon">
                                <img className='weather-icon' src={ fetchedData.current.condition.icon }/>
                                <p>{ fetchedData.current.condition.text }</p>                            
                            </div>

                            
                            <p>Feels like: { fetchedData.current.feelslike_c } °C/{ fetchedData.current.feelslike_f } °F</p>
                            <p>Humidity: { fetchedData.current.pressure_in } in/ { fetchedData.current.pressure_mb } mb</p>
                            <p>Precipitaion: { fetchedData.current.precip_mm } mm</p>
                            
                        </div>



                    </div> }        
                    {!showForecast && <div> <WeatherForcast/> </div>}
                </div>}  

        </div>
    );
}
 
export default WeatherDetails;