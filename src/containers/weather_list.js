import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const { name } = cityData.city;
    const temps = cityData.list.map(weather => weather.main.temp);

    const celsiusTemps = temps.map(item => item - 273);

    const humidyties = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;

    return (
      <tr key={name}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td>
          <Chart color="orange" data={celsiusTemps} units=" C" />
        </td>
        <td>
          <Chart color="black" data={humidyties} units=" hPa" />
        </td>
        <td>
          <Chart color="green" data={pressures} units=" %" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return {
    weather
  };
};

export default connect(mapStateToProps)(WeatherList);
