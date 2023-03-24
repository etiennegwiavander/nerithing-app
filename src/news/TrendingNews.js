import "./news.css"
import useFetchArray from "./useFetchArray"
import { NEWS_API_key, NEWS_BASE_URL } from "../api";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const TrendingNews = () => {
    let URL = `https://newsapi.org/v2/everything?q=manchester%20united&apiKey=aec5d48bf12b4d3f90ef893ffc64fb25`;


    const {fetchedData:articles, isLoading, error} = useFetchArray(URL) 
    
    const data = articles.articles
    
    console.log(articles)
    return ( 
        <div className="breaking_news">
            <div>
                <div >
                    {data && Object.keys(data).map((key) =>
                    <div >
                        <a href={data[key].url }>
                            <img src={data[key].urlToImage} />
                            <p style={{color: "white"}}> { data[key].description}</p>
                        </a>
                    </div>)}
                </div>
            </div>
        </div>
     );
}
 
export default TrendingNews; 