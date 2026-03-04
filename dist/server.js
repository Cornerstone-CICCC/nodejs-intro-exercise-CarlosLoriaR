"use strict";
// Create a server with four routes and their corresponding response:
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Home / 'text/html' 200: Should return <h1>Home</h1>
// About /about 'text/html' 200: Should return <h1>About</h1>
// My Account /my-account 'text/plain' 403: Should return You have no access to this page
// Any other url 'text/plain' 404: Should return Page not found
const http_1 = __importDefault(require("http"));
let myTodos = [
    { id: 1, task: "Wash laundry" },
    { id: 2, task: "Cook lunch" },
];
const student = {
    firstname: "John",
    lastname: "Smith",
    age: 30,
};
const server = http_1.default.createServer((request, response) => {
    const { url, method } = request;
    console.log(`Someone is visiting the ${url} route...`);
    console.log(request.method);
    if (url === "/") {
        response.writeHead(200, { "content-type": "text/html" });
        response.end("<h1>Home</h1>");
        return;
    }
    if (url === "/about") {
        response.writeHead(200, { "Content-type": "text/html" });
        response.end("<h1>About</h1>");
        return;
    }
    if (url === "/my-account") {
        response.writeHead(403, { "content-type": "text/plain" });
        response.end("You have no access to this page");
        return;
    }
    response.writeHead(404, { "Content-type": "text/plain" });
    response.end("Page not found");
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
