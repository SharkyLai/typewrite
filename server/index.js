const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());

const notes = require('./routes/api/notes');

app.use('/api/notes', notes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
