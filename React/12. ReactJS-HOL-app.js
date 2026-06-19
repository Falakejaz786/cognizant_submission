import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  login = () => {
    this.setState({ isLoggedIn: true });
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const flightDetails = (
      <div>
        <h2>Flight Details</h2>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Flight No</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Fare</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AI101</td>
              <td>Mumbai</td>
              <td>Delhi</td>
              <td>₹5000</td>
            </tr>
            <tr>
              <td>AI202</td>
              <td>Bangalore</td>
              <td>Chennai</td>
              <td>₹3500</td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    const guestPage = (
      <div>
        <h1>Welcome Guest</h1>
        <p>You can browse available flights.</p>
        {flightDetails}
      </div>
    );

    const userPage = (
      <div>
        <h1>Welcome User</h1>
        <p>You can browse and book tickets.</p>
        {flightDetails}
        <br />
        <button>Book Ticket</button>
      </div>
    );

    return (
      <div style={{ padding: "20px" }}>
        <h1>Ticket Booking App</h1>

        {this.state.isLoggedIn ? (
          <>
            <button onClick={this.logout}>Logout</button>
            {userPage}
          </>
        ) : (
          <>
            <button onClick={this.login}>Login</button>
            {guestPage}
          </>
        )}
      </div>
    );
  }
}

export default App;
