const app = require('./app');

const connectDatabase = require('./config/database');

//handling Uncaught Exception
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaught Exception`);
    process.exit(1);
});

//config
if(process.env.NODE_ENV !== "PODUCTION"){
    require('dotenv').config({path: "./config/.env"});
}

//conneting database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server Running on PORT: http://localhost:${process.env.PORT}`);
});

//unhandled error rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Error Rejection`);
    server.close(()=>{
        process.exit(1);
    });
});