const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// starts server
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
