import React, { Component } from "react";
import axios from "axios";

export default class ApiTest extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    const { data } = await axios.get("/api/hello-world");
    this.setState({ message: data.message });
  }

  render() {
    return <div>{this.state.message}</div>;
  }
}
