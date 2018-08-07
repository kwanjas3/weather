import React, { Component } from "react";

import SearchBar from "../container/searchBar";
import WeatherList from "../container/weatherList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  render() {
    return (
      <div className="container">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
