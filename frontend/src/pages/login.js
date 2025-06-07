import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed. Please check credentials.');
    }
  };

  return (
    <div className="container d-flex align-items-center vh-100">
      <form className="mx-auto w-50" onSubmit={handleLogin}>
        <h2 className="mb-4">Login</h2>
        <input
          className="form-control mb-2"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="form-control mb-2"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="btn btn-success w-100 mb-3">Login</button>
        <p className="text-center">
          Not have an account? <Link to="/register">Sign Up Here</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
