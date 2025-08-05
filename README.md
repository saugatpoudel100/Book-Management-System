# 📚 Book Management System

A full-stack Book Management System using:

- 🐍 Django REST Framework (Backend)
- 🔐 JWT Authentication (Login/Register)
- ⚛️ React.js (Frontend)
- 🗃 SQLite (Database)

---

# 🚀 Features

- User registration and login with JWT tokens
- Add, list, and delete books
- Protected routes (only logged-in users can access book data)
- Responsive and simple UI using React
- Fully connected frontend and backend

---

## 🧱 Project Structure

### 🔙 Backend (Django)

```bash
book_backend/
├── books/ # Book API app
├── users/ # Custom user registration
├── db.sqlite3 # SQLite DB
└── manage.py

```

### 🔜 Frontend (React)
```bash
book-frontend/
├── src/
│ ├── components/
│ │ ├── Login.js
│ │ ├── Register.js
│ │ ├── BookList.js
│ │ └── AddBook.js
│ ├── App.js
│ └── index.js
└── package.json

```

---

## 🔧 Setup Instructions

### ✅ Backend Setup (Django)

1. **Create virtual environment** (optional but recommended):
 ```bash
   python -m venv env
   source env/bin/activate  # On Windows: env\Scripts\activate

 ```
Install requirements:
```bash
pip install django djangorestframework djangorestframework-simplejwt
```

Run migrations and start server:
```bash
python manage.py migrate
python manage.py runserver
```

---

## 🧪 API Testing using Postman
You can test your API manually using Postman.

🔐 1. Login (Get Token)

POST http://localhost:8000/api/token/

Body (JSON):

json
```bash
{
  "username": "your_username",
  "password": "your_password"
}
```
✅ Response:
```bash
{
  "access": "<your_access_token>",
  "refresh": "<your_refresh_token>"
}
```
➕ 2. Register New User

POST http://localhost:8000/api/register/

Body (JSON):

json
```bash
{
  "username": "newuser",
  "password": "newpassword"
}
```

📚 3. Get Book List (JWT Required)
GET http://localhost:8000/api/books/

Headers:
```bash

Authorization: Bearer <your_access_token>
```
✍️ 4. Add Book
POST http://localhost:8000/api/books/

Headers:
Authorization: Bearer <your_access_token>
Content-Type: application/json
Body (JSON):

```bash
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "description": "A philosophical book about finding one’s destiny.",
  "published_date": "1993-05-15"
}
```
❌ 5. Delete Book
DELETE http://localhost:8000/api/books/<book_id>/

Headers:
```bash
Authorization: Bearer <your_access_token>
Replace <book_id> with the actual ID of the book you want to delete.
```

### 🔐 Authentication Overview
JWT tokens are obtained via /api/token/.

Access token is stored in React's localStorage.

Every authenticated API call must se


## ✅ Frontend Setup (React)
Install dependencies:
```bash
cd book-frontend
npm install
```

Start React frontend:
```bash
npm start
```

React Routes:
```bash
/ → Login

/register → Register

/books → View all books

/add-book → Add a new book
```

---
### 🔐 JWT Authentication
On login, access token is saved in localStorage.

This token is included in headers for protected API routes like:
```bash
headers: {
  Authorization: `Bearer ${token}`
}
```
---

### 🧪 Sample User Credentials
You can register using the UI or manually create one in Django admin:

```bash
python manage.py createsuperuser
```
---
### 📸 Screenshots (optional)
Add screenshots of your UI: login page, book list, add form.
---


## 📂 Future Improvements
Edit book details

Logout button

Better UI styling (using Tailwind or Bootstrap)

Pagination and search

Upload book cover images


---

# 🙋‍♂️ Author
Made by [Saugat].
Feel free to contribute or suggest improvements!