import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      rupees: "",
      euro: ""
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    alert("Hello! Have a nice day.");
  };

  handleIncrement = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  onPress = () => {
    alert("I was clicked");
  };

  handleChange = (event) => {
    this.setState({ rupees: event.target.value });
  };

  handleSubmit = () => {
    const euroValue = (this.state.rupees / 90).toFixed(2);
    this.setState({ euro: euroValue });
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Event Examples App</h1>

        <h2>Counter: {this.state.count}</h2>

        <button onClick={this.handleIncrement}>
          Increment
        </button>

        <button
          onClick={this.decrement}
          style={{ marginLeft: "10px" }}
        >
          Decrement
        </button>

        <hr />

        <button
          onClick={() =>
            this.sayWelcome("Welcome to React Event Handling")
          }
        >
          Say Welcome
        </button>

        <hr />

        <button onClick={this.onPress}>
          Synthetic Event (OnPress)
        </button>

        <hr />

        <h2>Currency Converter</h2>

        <input
          type="number"
          placeholder="Enter Rupees"
          value={this.state.rupees}
          onChange={this.handleChange}
        />

        <button
          onClick={this.handleSubmit}
          style={{ marginLeft: "10px" }}
        >
          Convert
        </button>

        <h3>Euro: € {this.state.euro}</h3>
      </div>
    );
  }
}

export default App;
