import React from "react";
import useLocalStorage from "use-local-storage";
import "./index.css";
import Switch from "react-switch";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const [checked, setChecked] = React.useState(false);

  const handleClick = (event) => {
    event.preventDefault();
  };

  const handleChange = (checked) => {
    setChecked(checked);
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <div className="login">
        <h1>Login</h1>
        <div className="container">
          <div className="top">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-apple"></i>
          </div>
          <p className="divider">
            <span>Or</span>
          </p>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
            <div className="remember">
              <input type="checkbox" checked="checked" />
              <p>Remember Me</p>
            </div>
            <button onClick={handleClick}>Log In</button>
          </form>
          <div className="bottom">
            <p>Forget your password?</p>
            <a onClick={handleClick} href="/">
              Reset Password
            </a>
          </div>
          <p className="create">Create Account</p>
        </div>
        <div className="theme-toggle">
          {theme === "light" && <h2>Light Mode</h2>}
          {theme === "dark" && <h2>Dark Mode</h2>}
          <Switch
            checkedIcon={false}
            uncheckedIcon={false}
            onColor="#8e05c2"
            onChange={handleChange}
            checked={theme === "dark" && true}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
