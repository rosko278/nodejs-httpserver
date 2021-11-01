const http = require("http");
const url = require("url");
const port = 8000;

const requestHandler = (request, response) => {
  const parsedUrl = url.parse(request.url, true);

  if (!parsedUrl.query.name || !parsedUrl.query.city) {
    response.end("Please provide name and city parameters");
  } else {
    response.end(
      `Hello, ${parsedUrl.query.name} from ${parsedUrl.query.city}!`
    );
  }
};

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
  if (err) {
    console.log("Something bad happened");
  } else {
    console.log("server is listening on port: " + port);
  }
});
