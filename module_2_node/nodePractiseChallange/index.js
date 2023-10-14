const http = require("http");
const url = require("url")
const fs = require("fs");
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ content: 'Welcome to Full Stack Development' }))
        res.end();
    } else if (req.url == '/newfile') {
        fs.writeFile('first.txt', 'I am a pull stack developer !!! 🤣', (err) => {
            if (err) {
                res.write('data failed to write this file');
                res.end();
            } else {
                res.write('data write successfully');
                res.end();
            }
        })
    } else if (req.url == '/read') {
        fs.readFile('first.txt', (err, data) => {
            if (err) {
                res.write('Exploring file system got an error')
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        })
    } else if (req.url == '/write') {
        fs.readFile('first.txt', (err, data) => {
            if (data) {
                fs.writeFile('second.txt', data, (err) => {
                    if (err) {
                        res.write('data failed to write this file');
                        res.end();
                    } else {
                        res.write('data write successfully');
                        res.end();
                    }
                })
            } else {
                res.write("There was a problem to overwrite data");
                res.end();
            }
        })
    } else if (req.url == '/append') {
        fs.appendFile('first.txt', ' No! It will be full not pull ! 😑', (err, data) => {
            if (err) {
                res.write('Something is wrong to append data');
                res.end();
            } else {
                res.write("append data successfully");
                res.end();
            }
        })
    } else if (req.url == '/delete') {
        fs.unlink('second.txt', (err) => {
            if (err) {
                res.write('There was a problem with delete file');
                res.end();
            } else {
                res.write('successfully delete the file')
                res.end();
            }
        })
    }
})
const PORT = 5000;
server.listen(PORT)
console.log(`Server Connected on the port of : ${PORT}`);