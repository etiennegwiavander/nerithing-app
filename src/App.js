import Homepage from "./Homepage";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WeatherDetails from "./WeatherDetails";
import WeatherForecast from "./WeatherForecast";
import News from "./news/News";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Homepage/>
            </Route>
            <Route  path="/weather">
              <WeatherDetails/>
            </Route>
            <Route path="/weather/weatherforecast">
              <WeatherForecast/>
            </Route>
            <Route path="/news">
              <News/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
