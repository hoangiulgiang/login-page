import React, { useState } from 'react';
import './App.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email xác nhận đã được gửi tới: ${email}`);
  };

  return (
    <div className="app-background">
      <div className="forgot-password-container">
        <h2 className="login-title">Quên mật khẩu</h2>
        <p>Nhập email của bạn để đặt lại mật khẩu:</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email" 
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="login-button">Gửi email xác nhận</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
