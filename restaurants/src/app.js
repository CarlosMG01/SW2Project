const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const routes = require('./routes');

const app = express();
app.use(cors()); // Asegúrate de que CORS está habilitado
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api', routes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
