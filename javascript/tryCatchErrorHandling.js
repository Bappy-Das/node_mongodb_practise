const { errorHandler, commonError } = require("./errorHandler.js");

commonError()
// Basic tryCatch apply

// async function getData() {
//     try {
//         undefined.find();
//     } catch (error) {
//         console.log(error);
//     }
// }
// getData()

// console.log("Done !");



// Error Handle with common function---------------------------------------

// async function getData() {
//     try {
//         undefined.find();
//     } catch (error) {
//         errorHandler(error)
//     }
// }
// getData()

// function errorHandler(err) {
//     console.log(err);
// }


// Error propertise found
// function errorHandler(err) {
//     // console.log(err);
//     const { name, message, stack } = err;
//     console.log(name);
//     console.log(message);
//     console.log(stack);


//     // Error store in logger
//     logger.err(
//         name,
//         message,
//         stack,
//         route,
//     )

// }


// User Defined Error----------------------------------------
async function getData() {
    try {
        const emailError = new Error("Email Already Exists!");
        throw emailError;
    } catch (error) {
        errorHandler(error)
    }
}
// function errorHandler(err) {
//     const { name, message, stack } = err;
//     console.log(name);
//     console.log("Message:", message);
// }
getData()
console.log("Done !");