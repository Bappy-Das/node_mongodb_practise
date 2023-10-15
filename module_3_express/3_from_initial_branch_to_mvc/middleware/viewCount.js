let count = 0;
const viewCount = (req, res, next) => {
    count++
    // res.send("View Count");
    console.log(count);
    next();
}
module.exports = viewCount;