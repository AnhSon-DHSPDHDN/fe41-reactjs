import { useState } from "react";
import "./App.css";
import useMagicColors from "./hooks/useMagicColors";

function App() {
  const magicColor = useMagicColors();
  const magicColor2 = useMagicColors();
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChangeFormValue = (event) => {
    const { value, name } = event.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue, "formValue");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register Form</h1>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={formValue.username}
            name="username"
            onChange={handleChangeFormValue}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={formValue.password}
            name="password"
            onChange={handleChangeFormValue}
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={formValue.confirmPassword}
            name="confirmPassword"
            onChange={handleChangeFormValue}
          />
        </div>

        <button type="submit">Register</button>
      </form>

      <div
        style={{
          width: 200,
          height: 200,
          borderRadius: "100%",
          backgroundColor: magicColor,
        }}
      ></div>
      <div
        style={{
          width: 200,
          height: 200,
          borderRadius: "100%",
          backgroundColor: magicColor2,
        }}
      ></div>
    </div>
  );
}

export default App;
