import { useEffect } from "react";
import { useState } from "react";
import { API_key } from "./api";

const useFetch = (url) => {

    const [fetchedData, setFetchedData]= useState(null)

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
            
        })
        .catch(err => console.error(err))
    }, [url])

    return {fetchedData}
}
 
export default useFetch;