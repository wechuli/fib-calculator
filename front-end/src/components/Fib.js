import React, { Component } from "react";
import axios from "axios";

export default class Fib extends Component {
  state = {
    seenIndex: [],
    values: {},
    index: ""
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }
  handleSubmit = async event => {
    event.preventDefault();

    await axios.post("/api/values", {
      index: this.state.index
    });
    this.setState({ index: "" });
  };
  async fetchValues() {
    const values = await axios.get("/api/values/current");
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get("/api/values/all");
    this.setState({ seenIndex: seenIndexes.data });
  }
  renderSeenIndexes() {
    return this.state.seenIndex.map(({ number }) => number).join(",");
  }
  renderValues() {
    const entries = [];
    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[key]}
        </div>
      );
    }
    return entries;
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="text">Enter your index</label>
          <input
            type="number"
            id="text"
            value={this.state.index}
            onChange={e => this.setState({ index: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>

        <h3>Indexes I have seen</h3>
        {this.renderSeenIndexes()}

        <h3>Calculated Values</h3>
        {this.renderValues()}
      </div>
    );
  }
}
