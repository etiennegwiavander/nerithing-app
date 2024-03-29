import { useEffect, useState  } from "react";

const useFetch = (url) => {

    const [fetchedData, setFetchedData]= useState([])
    const [isLoading, setIsLoading]= useState(true)
    const [error, setError]= useState(null)



    useEffect (()=>{
        
        fetch(url)
        .then(response => {
            
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
    
    
        
    }, [url])

    return {fetchedData, isLoading, error}
}
 
export default useFetch;