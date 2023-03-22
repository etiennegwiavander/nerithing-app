import "./news.css"
import useFetchArray from "./useFetchArray"
import { API_key, NEWS_BASE_URL } from "../api";


const TrendingNews = () => {
    let URL = `${NEWS_BASE_URL}/news/trendingtopics?textFormat=Raw&safeSearch=Off`
    const options = {
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key':`${API_key}` ,
        }
    }

    const {fetchedData:trends, isLoading, error} = useFetchArray(URL, options) 
    console.log(trends)

    return ( 
        <div className="breaking_news">
            <div>
                {trends && trends.map((trend) =>
                <img src= { trend.value[0].image.url } alt="" />
                )}
            </div>
        </div>
     );
}
 
export default TrendingNews;