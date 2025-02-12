import React, { useState } from 'react';
import './App.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const users = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Vui lòng nhập đầy đủ Email và Password.');
      return;
    }
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      setError('Email hoặc Password không đúng.');
    } else {
      setError('');
      setIsLoggedIn(true);
    }
  };



  if (isLoggedIn) {
    return (
      <div className="app-background">
        <div className="login-container">
          <h2 className="login-title">Hello!</h2>
        </div>
      </div>
    );
  }



  return (
    <div className="app-background">
    <div className="login-container">
      <h2 className="login-title">Đăng nhập</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          className="input-field" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="input-field" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="error-message">{error}</div>}
        <div className="forgot-password">Quên mật khẩu?</div>
        <button type="submit" className="login-button">Đăng nhập</button>
        <div className="divider">OR</div>
        <button type="button" className="social-button google-button" onClick={() => alert('Đăng nhập với Google')}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Google_icon_2015.png" alt="Google" className="icon" />
          Continue with Google
        </button>
        <button type="button" className="social-button facebook-button" onClick={() => alert('Đăng nhập với Facebook')}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="icon" />
          Continue with Facebook
        </button>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;