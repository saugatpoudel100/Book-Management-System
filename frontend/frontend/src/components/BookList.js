import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  // Fetch books from API
  const fetchBooks = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:8000/api/books/', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBooks(res.data);
    } catch (error) {
      alert('Failed to fetch books. Please log in again.');
      navigate('/');
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [navigate]);

  // Delete book by id
  const deleteBook = async (id) => {
    if (!window.confirm('Are you sure you want to delete this book?')) return;

    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8000/api/books/${id}/`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Book deleted!');
      fetchBooks(); // Refresh the list
    } catch (error) {
      alert('Failed to delete book.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Book List</h2>
        <button style={styles.addButton} onClick={() => navigate('/add-book')}>+ Add Book</button>
      </div>

      {books.length === 0 ? (
        <p style={styles.message}>No books available.</p>
      ) : (
        <div style={styles.bookList}>
          {books.map(book => (
            <div key={book.id} style={styles.bookCard}>
              <h4>{book.title}</h4>
              <h5>by {book.author}</h5>
              <p>{book.description}</p>
              <small>Published: {book.published_date}</small>
              <br />
              <button
                style={styles.deleteButton}
                onClick={() => deleteBook(book.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  addButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  message: {
    textAlign: 'center',
    color: '#666',
  },
  bookList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  bookCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    position: 'relative',
  },
  deleteButton: {
    marginTop: '10px',
    backgroundColor: '#b02a37', // darker danger red
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  }
};

export default BookList;
