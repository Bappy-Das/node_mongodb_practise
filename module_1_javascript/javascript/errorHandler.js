// Error propertise found
function errorHandler(err) {
    // console.log(err);
    const { name, message, stack } = err;
    console.log(name);
    console.log("Message:", message);
    // Error store in logger
    // logger.err(
    //     name,
    //     message,
    //     stack,
    //     route,
    // )
}
function commonError() {
    console.log("For test perpose");
}


module.exports = errorHandler;
module.exports = {
    errorHandler,
    commonError,
};


// Another way to export module----(In every funtion export before function declear)--------------------------------------------------
// module.exports.errorHandler = function errorHandler(err) {
//     // console.log(err);
//     const { name, message, stack } = err;
//     console.log(name);
//     console.log("Message:", message);
// }

// module.exports.commonError = function commonError() {
//     console.log("For test perpose");
// }


