import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const [book, setBook] = useState({
    title: '',
    author: '',
    description: '',
    published_date: ''
  });

  const navigate = useNavigate();

  const addBook = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:8000/api/books/', book, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Book Added!");
      navigate('/books');
    } catch (error) {
      alert('Error adding book. Please check your input or login.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Add Book</h2>
        <input
          type="text"
          placeholder="Title"
          style={styles.input}
          onChange={e => setBook({ ...book, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          style={styles.input}
          onChange={e => setBook({ ...book, author: e.target.value })}
        />
        <textarea
          placeholder="Description"
          style={{ ...styles.input, height: '80px' }}
          onChange={e => setBook({ ...book, description: e.target.value })}
        />
        <input
          type="date"
          style={styles.input}
          onChange={e => setBook({ ...book, published_date: e.target.value })}
        />
        <button style={styles.button} onClick={addBook}>Add</button>
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
    width: '100%',
    maxWidth: '400px'
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
    resize: 'none',
  },
  button: {
    backgroundColor: '#dc3545',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AddBook;
