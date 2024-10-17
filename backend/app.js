// app.js
const express = require('express');
const timeRoutes = require('./routes/timeRoutes');
const partidaRoutes = require('./routes/partidaRoutes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/api', partidaRoutes);
app.use('/api', timeRoutes); // prefixo da API

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
