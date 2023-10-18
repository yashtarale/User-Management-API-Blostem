const express = require('express');
const cors = require('cors');

// importing the express framework, which is used to build web applications in Node.js,
// and the cors middleware, which enables Cross-Origin Resource Sharing.


const app = express();
//this above line initializes the Express application.


//setting up CORS options to allow requests from https://localhost:8081. This is important
// for security reasons; it controls which domains are permitted to access your server.
var corsOptions = {
    origin: 'https://localhost:8081'
};



// Middleware
app.use(cors(corsOptions));
app.use(express.json()); // Note the function invocation
app.use(express.urlencoded({ extended: true }));

//app.use(cors(corsOptions)): This line applies the CORS middleware with the specified options.
//app.use(express.json()): This middleware is used to parse incoming JSON requests.
//app.use(express.urlencoded({ extended: true })): This middleware is used to parse incoming 
//requests with URL-encoded payloads. The extended: true option allows parsing of nested objects.




//routers
const router = require('./routes/productRouter.js')
app.use('/api/products', router)


// Testing API

app.get('/', (req, res) => {
    res.json({ message: 'hello from api' });
});

// Port
const PORT = process.env.PORT || 8080;

// Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
