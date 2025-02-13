import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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
          <div className="forgot-password">
            <Link to="/forgot-password" className="forgot-password-link">Quên mật khẩu?</Link>
          </div>
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

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email xác nhận đã được gửi tới: ${email}`);
  };

  return (
    <div className="app-background">
      <div className="forgot-password-container">
        <h2 className="forgot-password-title">Quên mật khẩu</h2>
        <p>Nhập email của bạn để đặt lại mật khẩu:</p>
        <form className="forgot-password-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email" 
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="login-button">Gửi email xác nhận</button>
        </form>
        <div className="back-to-login">
          <Link to="/" className="back-to-login-link">← Quay lại Đăng nhập</Link>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
