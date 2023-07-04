import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email and password
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    try {
      // Make API call to login endpoint (Replace API_ENDPOINT with the actual URL)
      const response = await axios.post('https://x8ki-letl-twmt.n7.xano.io/apidoc:XooRuQbs/login', {
        email,
        password,
      });

      // TODO: Handle successful login, e.g., redirect to dashboard page

      console.log('Login successful:', response.data);
    } catch (error) {
      // Handle login error
      if (axios.isAxiosError(error) && error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred during login. Please try again.');
      }
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <div className="error-message">{errorMessage}</div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
