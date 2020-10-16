import React from "react";
import Form from "./Form";
import WeatherData from "./WeatherData";

class FetchGeocode extends React.Component {
  state = {
    lat: undefined,
    long: undefined,
    status: undefined,
    summaryHourly: undefined,
    temperature: undefined,
    feelsLike: undefined
  };

  getWeather = async (lat, long) => {
    const api_call2 = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/f8ab38547a7a46716f7676b1977d1709/${lat},${long}?units=si`
    );
    const data2 = await api_call2.json();
    console.log(data2);
    this.setState ({
        summaryHourly: data2.hourly.summary,
        temperature: data2.currently.temperature,
        feelsLike: data2.currently.apparentTemperature
    })
}
  getCoord = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyATXxQ4r1AW5HYynWY37rAAu95zVvVPQsE`
    );
    const data = await api_call.json();
    this.setState({
      status: data.status
    });

    if (this.state.status === "OK") {
      this.setState({
        lat: data.results[0].geometry.location.lat,
        long: data.results[0].geometry.location.lng
      });

      this.getWeather(this.state.lat, this.state.long);
    }
  };

  render() {
    return (
      <div>
        <Form getCoord={this.getCoord} />
        <WeatherData 
            summaryHourly={this.state.summaryHourly} 
            temperature={this.state.temperature} 
            feelsLike={this.state.feelsLike} 
        />
      </div>
    );
  }
}

export default FetchGeocode;
