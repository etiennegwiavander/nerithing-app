import weathercss from './weather.module.css'
import { API_key } from "./api";
// import useFetch from "./useFetch";
import { useState, useEffect } from 'react';




const WeatherDetails = () => {

    const [city, setCity] = useState("Bamenda")
    const [fetchedData, setFetchedData]= useState(false)
    const [isLoading, setIsLoading]= useState(true)
    const [error, setError]= useState(null)

    
    let URL = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`

    const options = {
        headers: {
            'X-RapidAPI-Key':`${API_key}` ,
        }
    };
    
    const handleSubmit = (event) => { 
        event.preventDefault();

        fetch(URL, options)
        .then(response => {
            console.log(response)

            return response.json()})
        .then(data => {
            setCity(city)

        })
    }  
    
    // to only alow the input update the state of the app when the user is done typing
    useEffect (()=>{
        

        
        fetch(URL, options)
        .then(response => {
            console.log(response)
            if(!response.ok){
                throw Error("Could not fetch the data")
              }
            return response.json()})
        .then(data => {
            setFetchedData(data)
            setIsLoading(false)
            setError(null)
        })
        .catch(err => {
            if(err.name === "AbortError"){
              
            }else{
            setError(err.message)
            setIsLoading(false)
            setFetchedData(null)  
            setFetchedData(false)        
            }
    
          })
    
    }, [URL])

    // let {fetchedData: infos, isLoading, error} = useFetch(URL, options)

    return ( 
        <div className={weathercss.weatherDetails}>

           <form className='weather-input' onSubmit={handleSubmit}>
                <input type="text"  
                    required
                    value={ city }
                    onChange = {(e)=> setCity(e.target.value)}
                    placeholder='type city name'
                    
                />
                <button >Search</button>
            </form>

            { isLoading && <h1 className='weather-loader'> Loading ... </h1>}
            { error && <h3 className='weather-error'> {error}</h3> }
            {fetchedData &&  
            <div className= "weather_content">
                
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
                    
                <div className="conditions">
                    <div className="conditions-icon">
                        <img className='weather-icon' src={ fetchedData.current.condition.icon }/>
                        <p>{ fetchedData.current.condition.text }</p>                            
                    </div>

                    
                    <p>Feels like: { fetchedData.current.feelslike_c } °C/{ fetchedData.current.feelslike_f } °F</p>
                    <p>Humidity: { fetchedData.current.pressure_in } in/ { fetchedData.current.pressure_mb } mb</p>
                    <p>Precipitaion: { fetchedData.current.precip_mm } mm</p>
                    
                </div>        

                
            
            </div>}                
        

        </div>
     );
}
 
export default WeatherDetails;