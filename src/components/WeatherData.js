import React from "react";

class WeatherData extends React.Component {
  render() {
    return (
      <div style={{textAlign: "center"}}>
        {this.props.summaryHourly && this.props.temperature && this.props.feelsLike && <h4>{this.props.summaryHourly} It is currently {this.props.temperature} degrees celsius, but it
            feels like {this.props.feelsLike} degrees.</h4>}
      </div>
    );
  }
}

export default WeatherData;
