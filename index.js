const http = require("http");
const url = require("url");
const fs = require("fs");
// console.log(http);
const server = http.createServer((req, res) => {
    // res.end("Hello Node Js");
    // console.log(req.url);

    // req and res from server
    // if (req.url == '/') {
    //     res.writeHead(200, { 'content-type': 'application/json' });
    //     res.write(JSON.stringify({ "Content": "Node Mongo Crash Course" }))
    //     res.end();
    // }


    // exploring url
    // const address_url = 'http://localhost:5000/contact?name=bappy&country=bangladesh'
    // const persed_url = url.parse(address_url, true)
    // console.log(persed_url.query);


    // exploring file system readFile

    // asynchronous way
    // if (req.url == '/') {
    //     fs.readFile('data.txt', (err, data) => {
    //         if (err) {
    //             res.write("Exploring file system got an error")
    //             res.end();
    //         } else {
    //             res.write(data);
    //             res.end();
    //         }
    //     })
    // }

    // synchronous way
    // fs.readFileSync('data.txt');
    // res.write(data);
    // res.end();

    // // exploring file system writeFile
    // fs.writeFile('data.txt', 'Data Written by write File system !!!', (err) => {
    //     if (err) {
    //         res.write("data failed to write file");
    //         res.end();
    //     } else {
    //         res.write("Data Written succesfully");
    //         res.end();
    //     }
    // })
    // exploring file system writeFile with new file
    fs.writeFile('newData.txt', 'Data Written by write File system !!!', (err) => {
        if (err) {
            res.write("data failed to write file");
            res.end();
        } else {
            res.write("Data Written succesfully");
            res.end();
        }
    })


})
const PORT = 5000;
server.listen(PORT)
console.log(`Node Js server is running on : ${PORT}`);