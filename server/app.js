const express = require('express');
const cors  = require('cors');
const HandleErrors = require('./utils/error-handler')
const productRouter = require('./routes/product-route');

//module.exports = async (app) => {
    const app = express();   
    app.use(express.json());
    app.use(express.urlencoded({ extended: true}));
    app.use(cors());
    app.use('/product', productRouter);

    // error handling
    app.use(HandleErrors);  
    module.exports = app;  

//}



// const express = require('express');
// const HandleErrors = require('./utils/error-handler')
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// const productRouter = require('./routes/product-route');

// app.use('/product', productRouter);

// // error handling
// app.use(HandleErrors);

// // catch undefined routes and respond with 404
// // app.use(function(req, res, next) {
// //   res.status(404).send("Sorry can't find that!")
// // });

// // catch server errors and respond with 500
// // app.use(function (err, req, res, next) {
// //   console.error(err.stack)
// //   res.status(500).send('Something broke!')
// // })

// module.exports = app;