const express = require('express');

const app = express('/', (req, res) => res.send('api running'));

app.get();

// Processing the environment variable on a specific PORT specified throughout the project, or default 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
