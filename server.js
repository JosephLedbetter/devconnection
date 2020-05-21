const express = require('express');
const connectDB = require('./config/db');

const app = express();

//CONNECT DATABASE
connectDB();

app.get('/', (req, res) => res.send('api running'));

//DEFINE ROUTES
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/users', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/posts'));

// Processing the environment variable on a specific PORT specified throughout the project, or default 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
