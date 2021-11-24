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
    const name = e.target.name;
    const value = name === "checkbox" ? e.target.checked : e.target.value;

    this.setState({
      [name]: value,
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
            Twoje imię:
            <input
              type="text"
              id="user"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="pass">
            Hasło:
            <input
              type="password"
              id="pass"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="check">
            <input
              type="checkbox"
              id="check"
              name="checkbox"
              value={checkbox}
              onChange={this.handleChange}
            />
            Zapoznałem/am się z regulaminem.
          </label>

          <button>Wyślij formularz</button>
        </form>
      </div>
    );
  }
}

export default App;
