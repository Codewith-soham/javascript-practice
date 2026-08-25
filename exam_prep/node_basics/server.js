const http = require("http");
const fs = require("fs");

// server creation using createServer
const server = http.createServer((req, res) => {
    res.write("hello from node js" + req.url); //req.url will send information to the client's req
    res.end();
});

server.listen(3000, () => {
    console.log("Server running on 3000");
});

// read data from file
const data = fs.readFileSync("test.txt", "utf8"); // utf8 -> converts file into readable text
console.log(data);
console.log("finished reading completed");

// file read in asynchronous way
fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
});

console.log("File reading completed");

//read a file using stream
const readStream = fs.createReadStream("test.txt", "utf-8")

readStream.on("data", (chunk) => {
    console.log(chunk); //reads file in chunks 
})

//writerStream write data in files
const writerStream = fs.createWriteStream("test.txt")

writerStream.write("hello myself soham ")
writerStream.write("Learning node js")

writerStream.end()

//pipe -> connects readable to writable stream
const readStream1 = fs.createReadStream("test.txt")

const writeStream1 = fs.createWriteStream("output.txt")

readStream1.pipe(writeStream1)

// http module → Used to create HTTP server
// createServer() → Creates the server
// req → Incoming request
// res → Sends response
// res.write() → Writes response data
// res.end() → Ends the response
// listen(3000) → Server listens on port 3000