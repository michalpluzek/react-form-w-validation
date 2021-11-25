import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    checkbox: false,
    sendForm: false,
    errors: {
      username: false,
      email: false,
      password: false,
      checkbox: false,
    },
  };

  message = {
    username_incorrect:
      "Nazwa musi być dłuższa niż 3 znaki i nie może zawierać spacji.",
    email_incorrect: "Niewłaściwy adres email.",
    password_incorrect:
      "Hasło musi mieć min. 8 znaków, jedną cyfrę, jedną małą i jedną dużą literę.",
    checkbox_incorrect: "Nie potwierdzone zapozanie się z regulaminem.",
    form_send: "Formularz został wysłany.",
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

    const validation = this.formValidation();

    if (validation.correct) {
      this.setState({
        username: "",
        email: "",
        password: "",
        checkbox: false,
        sendForm: true,
        errors: {
          username: false,
          email: false,
          password: false,
          checkbox: false,
        },
      });
    } else {
      this.setState({
        sendForm: false,
        errors: {
          username: !validation.username,
          email: !validation.email,
          password: !validation.password,
          checkbox: !validation.checkbox,
        },
      });
    }
  };

  formValidation = () => {
    let username = false;
    let email = false;
    let password = false;
    let checkbox = false;
    let correct = false;

    // if (
    //   this.state.username.length > 3 &&
    //   this.state.username.indexOf(" ") === -1
    // ) {
    //   username = true;
    // }
    const regUsername = /^\S{3,}$/i;
    username = regUsername.test(this.state.username);

    // if (this.state.email.indexOf("@") !== -1) {
    //   email = true;
    // }
    const regEmail = /\w{3,}@[a-z]{2,}\.[a-z]{2,}/i;
    email = regEmail.test(this.state.email);

    // if (this.state.password.length >= 8) {
    //   password = true;
    // }
    const regPassword = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})/;
    password = regPassword.test(this.state.password);

    if (this.state.checkbox) {
      checkbox = true;
    }

    if (username && email && password && checkbox) {
      correct = true;
    }
    return {
      correct,
      username,
      email,
      password,
      checkbox,
    };
  };

  componentDidUpdate() {
    if (this.state.sendForm) {
      setTimeout(
        () =>
          this.setState({
            sendForm: false,
          }),
        3000
      );
    }
  }

  render() {
    const { username, email, password, checkbox, sendForm, errors } =
      this.state;
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
        {sendForm && <h4>{this.message.form_send}</h4>}
      </div>
    );
  }
}

export default App;
