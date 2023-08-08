// server.js
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const expiresIn = 3600;
const SECRET_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'; 

const users = [
  { "id": 1, "username": "roman", "password": "lopez" },
      { "id": 2, "username": "henry", "password": "canastero" },
      { "id": 3, "username": "diego", "password": "ferrer" }
];

app.use(cors());

app.use(bodyParser.json());

const createToken = (payload) => {
  const expirationDate = Math.floor(Date.now() / 1000) + expiresIn; 
  payload.exp = expirationDate;
  return jwt.sign(payload, SECRET_KEY);
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    const token = createToken({ username: user.username });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Invalid Credentials' });
  }
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
