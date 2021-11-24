import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    checkbox: false,
  };

  handleChange = (e) => {
    const username = e.traget.value;

    this.setState({
      username,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { username, email, password, checkbox } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="user">
            Twoje imię:{" "}
            <input
              type="text"
              id="user"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="email">
            E-mail:{" "}
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="password">
            Hasło:{" "}
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="checkbox">
            Twoje imię:{" "}
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              value={checkbox}
              onChange={this.handleChange}
            />
          </label>

          <button>Wyślij formularz</button>
        </form>
      </div>
    );
  }
}

export default App;
