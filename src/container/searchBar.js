import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }
  onInputChange(e) {
    this.setState({
      term: e.target.value
    });
  }
  onHandleSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  }
  render() {
    const { term } = this.state;
    return (
      <form className="input-group" onSubmit={this.onHandleSubmit}>
        <input
          className={`form-control`}
          type="text"
          value={term}
          placeholder="Get five-day forcast for your city"
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
