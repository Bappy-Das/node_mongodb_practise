const fs = require('fs');

const readStream = fs.createReadStream('streamData.txt');

readStream.on('data', (chank) => {
    console.log('..................');
    console.log(chank);
})

readStream.on('open', () => {
    console.log('stream is open');
})

setTimeout(() => {
    readStream.pause();
    console.log('streaming is pause after 10 sec');
}, 10);
setTimeout(() => {
    readStream.resume();
    console.log('streaming is resume');
}, 1500);