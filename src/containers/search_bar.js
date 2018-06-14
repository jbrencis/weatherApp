import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import connect from 'react-redux/lib/connect/connect';
import * as actions from '../actions';

class SearchBar extends Component {
  state = { city: '' };

  onInputChange = event => {
    this.setState({ city: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.fetchWeather(this.state.city);
    this.setState({ city: '' });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in any Latvian city"
          className="form-control"
          value={this.state.city}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

export default connect(
  null,
  actions
)(SearchBar);
