const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const routes = require('./routes/index');
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});