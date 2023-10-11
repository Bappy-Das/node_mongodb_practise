const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success found data after 1000 ms");
    }, 1000)
})

async function myFunction() {
    const res = await promise;
    console.log(res);
}
myFunction()