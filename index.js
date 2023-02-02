const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user.routes')
const app = express();

app.use(express.json());

// user main routes
app.use('/user', userRoutes);









connectDB();
app.listen(8080, () => {
    console.log("listening on port 8080");
})
