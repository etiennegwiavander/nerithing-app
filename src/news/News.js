import "./news.css"
import useFetchArray from "./useFetchArray"
import { API_key } from "../api";
import { useEffect, useRef, useState } from "react";
import { NEWS_BASE_URL } from "../api";

const News = () => {
    const [search, setSearch] = useState(" ")
    const inputRef = useRef()
    let URL = `${NEWS_BASE_URL}/news/search?q=${search}&days=3`
    const options = {
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key':`${API_key}` ,
        }
    }

    const {fetchedData:news, isLoading, error} = useFetchArray(URL, options) 

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

            <section>
               <h1> DAILY NEWS</h1> 
                <form  onSubmit={ handleSubmit }>
                    <input type="text" placeholder=" Search for News Headlines" 
                        required
                        ref={inputRef}
                        
                    />
             
                    <input type="submit"/>
                </form>

            </section>
            

        </div>
     );
}
 
export default News;