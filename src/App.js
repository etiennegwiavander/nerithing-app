import Homepage from "./Homepage";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WeatherDetails from "./WeatherDetails";
import WeatherForecast from "./WeatherForecast";


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
            <Route  path="/weather/weatherforecast">
              <WeatherForecast/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
