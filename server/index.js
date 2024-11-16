const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
const authRoutes = require('./route/auth');
// const messageRoute = require('./route/message');
const messageRoute = require('./route/message.js')
const userRoute = require('./route/user.js')
const databaseConnect = require('./database/connection');

dotenv.config();
app.use(cookieParser())

const Port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.json({ message: 'API Live' });
});

app.use('/auth', authRoutes);
app.use('/message', messageRoute);
app.use('/user', userRoute);


app.listen(Port, () => {
    databaseConnect();
    console.log(`Server is running on port http://localhost:${Port}`);
});