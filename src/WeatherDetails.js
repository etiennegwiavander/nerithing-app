import weathercss from './weather.module.css'
import { API_key } from "./api";
import useFetch from "./useFetch";
import { useState } from 'react';

const WeatherDetails = () => {

    const [city, setCity] = useState(" ")

    const options = {
        headers: {
            'X-RapidAPI-Key':`${API_key}` ,
        }
    };
    const {fetchedData: infos, isLoading, error} = useFetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
    console.log(infos)

    const handleSubmit = (e) => {
    e.preventDefault()
    infos = {infos, isLoading, error}

    }
    return ( 
        <div className={weathercss.weatherDetails}>

                <form className='weather-input' onSubmit={handleSubmit}>
                    <input type="text" placeholder='type city name'
                    required
                    value={ city }
                    onChange = {(e)=> setCity(e.target.value)}
                    />
                    <button>Search</button>
                </form>

                { isLoading && <h1 className='weather-loader'> Loading ... </h1>}
                { error && <h3 className='weather-error'> {error}</h3> }
                {infos &&  
                <div className= "weather_content">
                    
                    <div className="weather-location">

                        <div className="location-time">
                            <p>Local time: { infos.location.localtime }</p>
                            <p>Last Updated: { infos.current.last_updated }</p>  
                        </div>
                        
                        <div className="location-date">
                            <p className='weather-city'>{ infos.location.name }</p>
                            <p>{ infos.location.region }, { infos.location.country }</p>                          
                        </div>

                    </div>
                    <div className='weather-temperature'> 
                        <h1>🌡</h1>
                        <p >{ infos.current.temp_c } °C/ { infos.current.temp_f } °F</p>
                    </div>
                        
                    <div className="conditions">
                        <div className="conditions-icon">
                            <img className='weather-icon' src={ infos.current.condition.icon }/>
                            <p>{ infos.current.condition.text }</p>                            
                        </div>

                        
                        <p>Feels like: { infos.current.feelslike_c } °C/{ infos.current.feelslike_f } °F</p>
                        <p>Humidity: { infos.current.pressure_in } in/ { infos.current.pressure_mb } mb</p>
                        <p>Precipitaion: { infos.current.precip_mm } mm</p>
                        
                    </div>        

                    
                
                </div>}                
            

        </div>
     );
}
 
export default WeatherDetails;