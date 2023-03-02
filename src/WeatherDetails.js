import weathercss from './weather.module.css'
import { API_key } from "./api";
import useFetch from "./useFetch";

const WeatherDetails = () => {
    const options = {
        headers: {
            'X-RapidAPI-Key':`${API_key}` ,
        }
    };
    const {fetchedData: infos, isLoading, error} = useFetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Bamenda', options)
    console.log(infos)
    return ( 
        <div className={weathercss.weatherDetails}>

                <form className='weather-input'>
                    <input type="text" placeholder='type city name'/>
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

                    <div className="conditions">
                        <div className="conditions-icon">
                            <img className='weather-icon' src={ infos.current.condition.icon }/>
                            <p>{ infos.current.condition.text }</p>                            
                        </div>

                        <p>{ infos.current.temp_c } °C</p>
                        <p>Feels like: { infos.current.feelslike_c } °C/{ infos.current.feelslike_f } °F</p>
                        <p>Humidity: { infos.current.pressure_in } in/ { infos.current.pressure_mb }</p>
                        <p>Precipitaion: { infos.current.humidity } °C</p>
                        
                    </div>        

                    
                
                </div>}                
            

        </div>
     );
}
 
export default WeatherDetails;