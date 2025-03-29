import React, { useState } from "react";
import "./Registro.css";

function Registro() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = (campo) => {
    if (campo === "password") {
      setPasswordVisible(!passwordVisible);
    } else if (campo === "confirmPassword") {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  };

  return (
    <div className="registro-container">
      <h2>Create an account</h2>
      <p className="subtitle">Enter your information to register</p> {/* Fixed typo "yout" to "your" */}
      <form className="registro-form">
        <div className="form-group row">
          <div className="form-group">
            <label htmlFor="nombre">First name</label>
            <input type="text" id="nombre" name="nombre" placeholder="Write your first name" />
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Last name</label>
            <input type="text" id="apellido" name="apellido" placeholder="Write your last name" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Write your email" />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Phone</label>
          <input type="tel" id="telefono" name="telefono" placeholder="Write your phone number" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Write your password" // Adjusted placeholder text for clarity
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => togglePasswordVisibility("password")}
              aria-label="Toggle password visibility" // Added aria-label for accessibility
            >
              {passwordVisible ? (
                <i className="bi bi-eye"></i>
              ) : (
                <i className="bi bi-eye-slash"></i>
              )}
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="confirmarPassword">Confirm Password</label>
          <div className="password-container">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              id="confirmarPassword"
              name="confirmarPassword"
              placeholder="Confirm your password" // Adjusted placeholder text for clarity
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => togglePasswordVisibility("confirmPassword")}
              aria-label="Toggle confirm password visibility" // Added aria-label for accessibility
            >
              {confirmPasswordVisible ? (
                <i className="bi bi-eye"></i>
              ) : (
                <i className="bi bi-eye-slash"></i>
              )}
            </button>
          </div>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registro;
