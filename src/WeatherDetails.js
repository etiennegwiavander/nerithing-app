import weathercss from './weather.module.css'
import { API_key, BASE_URL } from "./api";
import useFetch from "./useFetch";
import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import WeatherForcast from './WeatherForecast';
import { FaSearch } from 'react-icons/fa';


const WeatherDetails = () => {

    const [city, setCity] = useState(" ")
    const [showForecast, setShowForecast] = useState(true)
    const inputRef = useRef()

    let URL = `${BASE_URL}/current.json?q=${city}`

    const options = {
        headers: {
            'X-RapidAPI-Key':`${API_key}` ,
        }
    }

    const {fetchedData, isLoading, error} = useFetch(URL, options)  
    // to only alow the input update the state of the app when the user is done typing
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        const value = inputRef.current.value
        if ( value === " ") return
        
        setCity(prev => {
            return [...prev, value]
        })

        inputRef.current.value = " "
    }
    
 
    
    const history = useHistory();

    return ( 
        <div className={weathercss.weatherDetails} >
            
            <form className='weather-input' onSubmit={ handleSubmit } >
                <input type="text" 
                    placeholder='Type your city name' 
                    required
                    ref={inputRef} 
                />
                <button type='submit' ><FaSearch /></button>
            </form>
        
            { isLoading && <h1 className='weather-loader'> Loading ... </h1>}
            { error && <h3 className='weather-error'> {error}</h3> }
            {fetchedData &&  
            <div className= "weather_content">
                {showForecast && <div onLoad ={ () =>history.push('/weather') }>
                    
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
                        setShowForecast(!showForecast)}}
                        title=" Click to get Forecast Details!">
                    
                        <div className="conditions-icon">
                            <img className='weather-icon' src={ fetchedData.current.condition.icon }/>
                            <p>{ fetchedData.current.condition.text }</p>                            
                        </div>

                        
                        <p>Feels like: <span> { fetchedData.current.feelslike_c } °C/{ fetchedData.current.feelslike_f } °F</span> </p>
                        <p>Pressure: <span> { fetchedData.current.pressure_in } in/ { fetchedData.current.pressure_mb } mBar </span> </p>
                        <p>Precipitaion: <span> { fetchedData.current.precip_mm } mm </span> </p>
                        <p>Speed: <span> { fetchedData.current.wind_kph } kph </span> </p>
                        <p>Humidity: <span> { fetchedData.current.humidity } %</span> </p>
                        <p>Visibility: <span> { fetchedData.current.vis_km } km</span> </p>
                        
                    </div>



                </div> }        
                {!showForecast && <div > <WeatherForcast/> </div>}
            </div>}  

        </div>
    );
}
 
export default WeatherDetails;