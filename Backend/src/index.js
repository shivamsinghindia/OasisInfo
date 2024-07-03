const dotenv = require('dotenv')
const cors = require('cors')
const express = require('express');

const server = express();
dotenv.config({
    path: '../.env'
})


const { dbConnection } = require('./db/connection.db.js')
const { authMiddleware } = require('./middlewares/auth.middleware.js')

//db connection
dbConnection().catch((err) => {
    console.log("db connectio failed \n", err);
});


server.use(cors()) // you can pass options as well in cors

server.use(express.json());


server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));


// routers import

const { userRoute } = require('./routes/user.route.js')
const { authRoute } = require('./routes/auth.route.js');




//router declaration
server.use('/auth', authRoute);

server.use('/api/user', authMiddleware, userRoute);



server.listen(process.env.PORT, (error) => {
    console.log('server started..' + process.env.PORT)
})


