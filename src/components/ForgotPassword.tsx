import React, { useState } from "react";
import axios from "axios";
import "./ForgotPasswordPage.css"; // Import CSS file for styling

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post("API_ENDPOINT/forgot-password", {
        email,
      });

      if (response.data.success) {
        setSuccessMessage(response.data.message);
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error occurred during forgot password:", error);
    }
  };

  return (
    <div className="forgot-password-container">
      <h1>Forgot Password Page</h1>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button onClick={handleForgotPassword}>Reset Password</button>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default ForgotPasswordPage;
