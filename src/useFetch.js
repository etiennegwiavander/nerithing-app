import { useEffect, useState  } from "react";
import { API_key } from "./api";

const useFetch = (url) => {

    const [fetchedData, setFetchedData]= useState(false)
    const [isLoading, setIsLoading]= useState(true)
    const [error, setError]= useState(null)

    const options = {
        headers: {
            'X-RapidAPI-Key':`${API_key}` ,
        }
    };

    useEffect (()=>{
  
        const getData = setTimeout(() => {
            fetch(url, options)
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
        }, 1500)
        
        return () => clearTimeout(getData)
    }, [url])

    return {fetchedData, isLoading, error}
}
 
export default useFetch;