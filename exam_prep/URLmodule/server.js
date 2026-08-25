//http://localhost:3000/student?id=101&name=Soham

// http://localhost:3000/student?id=101&name=Soham
// │      │              │        │
// │      │              │        └── Query parameters
// │      │              └── Pathname
// │      └── Host
// └── Protocol

const url = require("url")

const myUrl = new URL(
    "http://localhost:3000/student?id=101&name=Soham"
)

console.log();

console.log("Protocol:", myUrl.protocol);
console.log("Host:", myUrl.host);
console.log("Pathname:", myUrl.pathname);
console.log("Search:", myUrl.search);