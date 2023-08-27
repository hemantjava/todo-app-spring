import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const [username, setUsername] = useState("hemantjava");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const navigate = useNavigate();

  const handleUsernanmeChange = (Event) => {
    setUsername(Event.target.value);
  };
  const handlePasswordChange = (Event) => {
    setPassword(Event.target.value);
  };
  const handleSubmit = () => {
    if (username === "hemantjava" && password === "java") {
      setSuccessMessage(true);
      setErrorMessage(false);
      navigate("/welcome");
    } else {
      setSuccessMessage(false);
      setErrorMessage(true);
    }
  };

  return (
    <>
      <div className="container">
        {successMessage && (
          <div className="alert alert-success" role="alert">
            Authentication Successfully!!
          </div>
        )}
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            Authentication Failure!!
          </div>
        )}
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={handleUsernanmeChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button
            type="button"
            name="login"
            id=""
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
