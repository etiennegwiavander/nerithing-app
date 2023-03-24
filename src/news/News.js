import "./news.css"
import useFetchArray from "./useFetchArray"
import { NEWS_API_key, NEWS_BASE_URL } from "../api";
import { useRef, useState } from "react";
import  TrendingNews  from "./TrendingNews"


const News = () => {
    const [search, setSearch] = useState(" ")
    const inputRef = useRef()
    let URL = `${ NEWS_BASE_URL}q=${search}&apiKey=${ NEWS_API_key }`

    const {fetchedData:news, isLoading, error} = useFetchArray(URL) 

    const handleSubmit = (e) =>{
        e.preventDefault()
        const value = inputRef.current.value
        if ( value === " ") return
        setSearch(prev => {
            return [...prev, value]
        })
        inputRef.current.value = " "
        console.log(news)
    }
   

    return ( 
        <div className="news">

            <h1> DAILY NEWS</h1> 
            <form  onSubmit={ handleSubmit }>
                <input type="text" placeholder=" Search for News Headlines" 
                    required
                    ref={inputRef}
                />
            
                <input type="submit"/>
            </form>
            <div>
                <TrendingNews/>
            </div>
           
            

        </div>
     );
}
 
export default News;