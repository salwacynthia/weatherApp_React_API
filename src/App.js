import React from "react";
import "./App.css";
import Search from "./Components/Search";
import Weather from "./Components/Weather";
import "bootstrap/dist/css/bootstrap.min.css";

const Api_Key = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
      country: "",
      celsius: "",
      temp_feels_like:"",
      description: "",
      error: false
    };
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getWeather = async e => {
    // console.log(process.env.REACT_APP_API_KEY);
    e.preventDefault();
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;
    console.log(city)
    if (country && city) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
      );

      const response = await api_call.json();
      console.log(response);

      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        country: response.sys.country,
        celsius: this.calCelsius(response.main.temp),
        temp_feels_like: this.calCelsius(response.main.feels_like),
        description: response.weather[0].description,
        error: false
      });

    } else {
      this.setState({
        error: true
      });
    }
  };


 
  render() {
    return (
      <div className={(this.state.celsius  > 16)?'App':'AppCold'}>
        <h1 className="page-header">Weather App</h1>
        <Search 
           loadweather={this.getWeather} 
           error={this.state.error} 
        />
        <Weather
           cityname={this.state.city}
           temp_celsius={this.state.celsius}
           temp_feels_like={this.state.temp_feels_like}
           description={this.state.description}
          
        />
      </div>
    );
  }
}

export default App;