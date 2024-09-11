const express = require("express");
const http = require("http");
const cors = require("cors");
const path = require("path");
const router = require("./routes/configRoutes");
const { connectToDB } = require("./db/mongo")
// const logger = require('./middleware/loggerWinson')

const app = express();

const initServer = async () => {
    await connectToDB();

    const server = http.createServer(app);
    const port = process.env.PORT || 3010;
    server.listen(port);
};

initServer()

const allowedOrigins = [
    'https://racheldatabase.onrender.com',
    'https://admin2rachel.onrender.com'
]

const createServer = async () => {
    app.use(cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true
    }));
    app.use(express.json());
    app.use('/images', express.static(path.join(__dirname, 'Images')));
    app.use(router);
};

createServer();
