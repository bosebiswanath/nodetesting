// const app = require('./app');
// const debug = require('debug')('example:server');

// const port = parseInt(process.env.PORT || '3000', 10);
// app.set('port', port);

// app.listen(app.get('port'), function () {
//   debug(`Express server listening on port ${app.get('port')}`);
// });
const { PORT } = require('./config');
const { databaseConnection } = require('./Database');
const expressApp = require('./app');

const StartServer = async() => {
    await databaseConnection();    
    expressApp.listen(PORT, () => {
        console.log(`listening to port ${PORT}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer();