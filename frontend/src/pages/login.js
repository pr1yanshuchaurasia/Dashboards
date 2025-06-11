import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../index.css';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const validateForm = () => {
    const { email, password } = form;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      alert('Please fill in all required fields.');
      return false;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed. Please check your credentials.');
    }
  };

  
    return (
  <div className="login-page-wrapper">
    <div className="container d-flex align-items-center vh-100">
      <form className="mx-auto w-50" onSubmit={handleLogin}>
        <h2 className="mb-4 text-center">Login</h2>
        <input
          className="form-control mb-2"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="form-control mb-2"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="btn btn-success w-100 mb-3" type="submit">Login</button>
        <p className="text-center">
          Not have an account? <Link to="/register">Sign Up Here</Link>
        </p>
      </form>
    </div>
  </div>
);

   
}

export default Login;
