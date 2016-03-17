var http = require('http');
var fs = require('fs');

var port = process.env.PORT;
var file = process.env.FILE_PATH;
if(file === undefined || file === null || port === undefined || port === null) {
  console.error("Cannot initialize the project");
} else {
  http.createServer((request, response) => {
    if(request.url === "/") {
      response.writeHead(200)
      response.write("Ready to work !")
      response.end()
    } else if(request.url === "/download") {
      response.setHeader('Content-type','application/json');
      response.writeHead(200);
      var stream = fs.createReadStream(file,{flags: 'r'});
      var fd = null;
      stream.on('open', (fdI) => fd = fdI);
      stream.on('data', (data) => response.write(data));
      stream.on('end' , () => response.end());
    } else {
      response.writeHead(404)
      response.write("Action not found")
      response.end()
    }
  }).listen(port, () => console.log("ready to work !"));
}
