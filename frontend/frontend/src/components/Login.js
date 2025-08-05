import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [data, setData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/token/', data);
      localStorage.setItem('token', res.data.access);
      navigate('/books');
    } catch (err) {
      alert('Invalid credentials!');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Login</h2>
        <input
          type="text"
          placeholder="Username"
          style={styles.input}
          onChange={e => setData({ ...data, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          onChange={e => setData({ ...data, password: e.target.value })}
        />
        <button style={styles.button} onClick={loginUser}>Login</button>
        <p style={styles.text}>
          Don't have an account? <Link to="/register" style={styles.link}>Register</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f0f2f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  box: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0,0,0,0.3)',
    textAlign: 'center',
    zIndex: 1001,
  },
  title: {
    marginBottom: '20px',
    fontSize: '24px',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#dc3545', // Bootstrap danger red
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  text: {
    marginTop: '15px',
    fontSize: '14px',
  },
  link: {
    color: '#dc3545',
    textDecoration: 'none',
  }
};

export default Login;
