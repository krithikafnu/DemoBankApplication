const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./config/database');
const clientsRoute = require('./routes/clients');

const app = express();
const PORT = 5001;

app.use(cors({
  origin: 'http://localhost:3000', // Replace with your React app's origin
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,
}));
app.use('/api/clients', clientsRoute);

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(` Server running at http://localhost:${PORT}`);
  });
});

