import { useEffect } from "react";
import { useState } from "react";
import { API_key } from "./api";

const useFetch = (url) => {

    const [fetchedData, setFetchedData]= useState(false)
    const [isLoading, setIsLoading]= useState(true)

    useEffect (()=>{
        
        const options = {
            headers: {
                'X-RapidAPI-Key':`${API_key}` ,
            }
        };

        fetch(url, options)
        .then(response => response.json())
        .then(data => {
            setFetchedData(data)
            setIsLoading(false)
            
        })
        .catch(err => console.error(err))
    }, [url])

    return {fetchedData, isLoading}
}
 
export default useFetch;