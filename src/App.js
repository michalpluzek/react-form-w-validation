import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    checkbox: false,
    errors: {
      username: false,
      email: false,
      password: false,
      checkbox: false,
    },
  };

  message = {
    username_incorrect:
      "Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji.",
    email_incorrect: "Brak @ w emailu.",
    password_incorrect: "Hasło musi mieć min. 8 znaków.",
    checkbox_incorrect: "Nie potwierdzone zapozanie się z regulaminem.",
  };

  handleChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    const value = type === "checkbox" ? e.target.checked : e.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { username, email, password, checkbox, errors } = this.state;
    const {
      username_incorrect,
      email_incorrect,
      password_incorrect,
      checkbox_incorrect,
    } = this.message;

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">
            Twoje imię:
            <input
              type="text"
              id="user"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            {errors.username && (
              <span className="red">{username_incorrect}</span>
            )}
          </label>

          <label htmlFor="email">
            Twój email:
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            {errors.email && <span className="red">{email_incorrect}</span>}
          </label>

          <label htmlFor="pass">
            Twoje hasło:
            <input
              type="password"
              id="pass"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            {errors.password && (
              <span className="red">{password_incorrect}</span>
            )}
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
          {errors.checkbox && <span className="red">{checkbox_incorrect}</span>}

          <button>Wyślij</button>
        </form>
      </div>
    );
  }
}

export default App;
