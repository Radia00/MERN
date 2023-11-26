const express = require('express')
const router = require('./src/routes/api')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

// Security Middleware Imports
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors')

// Use helmet to set various HTTP headers for security
app.use(helmet());

// Limit requests from the same IP address
const limiter = rateLimit({
    max: 1000,
    windowMs: 60 * 60 * 1000, // 1 hour
    message: 'Too many requests from this IP, please try again later.',
});
app.use('/api', limiter);

// Sanitize data against NoSQL query injection
app.use(mongoSanitize());

// Clean data against XSS attacks
app.use(xss());

// Prevent HTTP Parameter Pollution
app.use(hpp());

// Enable CORS
app.use(cors());


// Init Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json());

//Morgan Middleware
const morgan = require('morgan');
app.use(morgan('dev'));

// Connect to MongoDB
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });
mongoose.connect(process.env.mongoURI, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log('MongoDB Connected...')
})
    .catch(err => console.log('MongoDB Connection Error', err));

// Front end Tagging
// app.use(express.static('client/dist'));
// app.get('*', (req, res) => {
//     // res.sendFile('index.html', { root: 'client/dist' });
//     res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
// })

// Define Routes
app.use('/api/v1', router)

// 404 Handler
app.use('*', (req, res) => {
    res.status(404).json({ message: "Not Found" });
});



module.exports = app