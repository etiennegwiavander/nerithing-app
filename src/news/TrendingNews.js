import "./news.css"
import useFetchArray from "./useFetchArray"
import HorizontalScroll from "react-horizontal-scrolling";
import { NEWS_API_key, NEWS_BASE_URL } from "../api";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const TrendingNews = () => {
    let URL = `${ NEWS_BASE_URL}Everything?q=technology&apiKey=${ NEWS_API_key }`;

    const {fetchedData:articles, isLoading, error} = useFetchArray(URL) 
    
    const data = articles.articles

    console.log(articles)
    return ( 
        <div className="breaking_news">
            <fieldset>
                <legend>
                    <b>
                        Breaking News
                    </b>
                </legend>
                
                    {data && Object.keys(data).map((key, index) =>
                    <div className="headlines"  style={{  
                            backgroundImage: `url(${data[key].urlToImage})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '152px',
                            width: '254px'
                        }}>
                        <small style={{color:"red"}}> { data[key].source.name}</small>
                        <a href={data[key].url }>

                            <p style={{color: "white"}}> { data[key].title}</p>
                            
                        </a>
                        
                    </div>)}
               
            </fieldset>
                
            
        </div> 
     );
}
 
export default TrendingNews; 