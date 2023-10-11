const myPromise = new Promise((resolve, reject) => {
    const user = null;
    if (!user) {
        reject("Something went wrong");
    } else {
        setTimeout(() => {
            resolve("Succesfully Got Data")
        }, 1000)
    }
})
myPromise.then(res => console.log(res)).catch(err => console.log(err))