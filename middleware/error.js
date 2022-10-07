const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Wrong mongoDB ID Error
    if (err.name === "CastError") {
        const message = `Resource Not Found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    // MongoDB Duplication Error
    if (err.name === "11000") {
        err = new ErrorHandler(`Duplicate ${Object.keys(err.keyValue)}`, 400);
    }

    // Wrong JWT Error
    if (err.name === "JsonwebTokenError") {
        const message = `Json Web Token is Invalid, Try Again`;
        err = new ErrorHandler(message, 400);
    }

    // JWT Expire Error
    if (err.name === "TokenExpiredError") {
        const message = `Json Web Token is Expired, Try Again`;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({success: false, message: err.message});
};