const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const routes = require('./routes');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api', routes);

app.use(errorHandler); // Middleware de manejo de errores

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
