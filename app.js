const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./routes/index');
const userRoutes = require('./routes/userRoute');
app.use(express.json())
app.use('/m11', routes);
app.use('/users', userRoutes);
const PORT = 3000;
app.listen(PORT, () => console.log(`Server jalan di : http://localhost:${PORT}`));