import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [sendForm, setSendForm] = useState(false);
  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false,
    checkbox: false,
  });

  const message = {
    username_incorrect:
      "Nazwa musi być dłuższa niż 3 znaki i nie może zawierać spacji.",
    email_incorrect: "Niewłaściwy adres email.",
    password_incorrect:
      "Hasło musi mieć min. 8 znaków, jedną cyfrę, jedną małą i jedną dużą literę.",
    checkbox_incorrect: "Nie potwierdzone zapozanie się z regulaminem.",
    form_send: "Formularz został wysłany.",
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    const value = type === "checkbox" ? e.target.checked : e.target.value;

    switch (name) {
      case "username":
        setUsername(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "checkbox":
        setCheckbox(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = formValidation();

    if (validation.correct) {
      setUsername("");
      setEmail("");
      setPassword("");
      setCheckbox(false);
      setSendForm(true);
      setErrors({
        username: false,
        email: false,
        password: false,
        checkbox: false,
      });
    } else {
      setSendForm(false);
      setErrors({
        username: !validation._username,
        email: !validation._email,
        password: !validation._password,
        checkbox: !validation._checkbox,
      });
    }
  };

  const formValidation = () => {
    let _username = false;
    let _email = false;
    let _password = false;
    let _checkbox = false;
    let correct = false;

    // if (
    //   this.state.username.length > 3 &&
    //   this.state.username.indexOf(" ") === -1
    // ) {
    //   username = true;
    // }
    const regUsername = /^\S{3,}$/i;
    _username = regUsername.test(username);

    // if (this.state.email.indexOf("@") !== -1) {
    //   email = true;
    // }
    const regEmail = /\w{3,}@[a-z]{2,}\.[a-z]{2,}/i;
    _email = regEmail.test(email);

    // if (this.state.password.length >= 8) {
    //   password = true;
    // }
    const regPassword = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})/;
    _password = regPassword.test(password);

    if (checkbox) {
      _checkbox = true;
    }

    if (_username && _email && _password && _checkbox) {
      correct = true;
    }
    return {
      correct,
      _username,
      _email,
      _password,
      _checkbox,
    };
  };

  useEffect(() => {
    if (sendForm) {
      setTimeout(() => setSendForm(false), 3000);
    }
  }, [sendForm]);

  const {
    username_incorrect,
    email_incorrect,
    password_incorrect,
    checkbox_incorrect,
  } = message;

  return (
    <div className="App">
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="user">
          Twoje imię:
          <input
            type="text"
            id="user"
            name="username"
            value={username}
            onChange={handleChange}
          />
          {errors.username && <span className="red">{username_incorrect}</span>}
        </label>

        <label htmlFor="email">
          Twój email:
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
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
            onChange={handleChange}
          />
          {errors.password && <span className="red">{password_incorrect}</span>}
        </label>

        <label htmlFor="check">
          <input
            type="checkbox"
            id="check"
            name="checkbox"
            checked={checkbox}
            onChange={handleChange}
          />
          Zapoznałem/am się z regulaminem.
        </label>
        {errors.checkbox && <span className="red">{checkbox_incorrect}</span>}

        <button>Wyślij</button>
      </form>
      {sendForm && <h4>{message.form_send}</h4>}
    </div>
  );
};

export default App;
