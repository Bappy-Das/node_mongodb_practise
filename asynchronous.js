const firstFunction = () => {
    setTimeout(() => {
        console.log("I Love You Dear TUTU");
    }, 3000)
}

const secondFunction = () => {
    console.log("Don't worry dear! This is a just a function");
}
firstFunction();
secondFunction();

// in asynchronous process there need to show result from firstFunction but..
// the process complete after 3000 sec.so that it call second one.
// so that is was asynchronous but single threaded