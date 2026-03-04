// Create a server with four routes and their corresponding response:

// Home / 'text/html' 200: Should return <h1>Home</h1>
// About /about 'text/html' 200: Should return <h1>About</h1>
// My Account /my-account 'text/plain' 403: Should return You have no access to this page
// Any other url 'text/plain' 404: Should return Page not found

import http from "http";

let myTodos = [
  { id: 1, task: "Wash laundry" },
  { id: 2, task: "Cook lunch" },
];

const student = {
  firstname: "John",
  lastname: "Smith",
  age: 30,
};

const server = http.createServer(
  (request: http.IncomingMessage, response: http.ServerResponse) => {
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
  },
);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
